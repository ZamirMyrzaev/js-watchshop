import React, { createContext, useReducer } from 'react';
import axios from 'axios'
import { calcSubPrice, calcTotalPrice, getCountProductsInCart } from '../components/Cart/CartFunction'
import {  getCountProductsInChosen, calcSubChosen, calcTotalChosen } from '../components/Chosen/ChosenFunction'
import { LocalParkingTwoTone } from '@material-ui/icons';

export const productContext = createContext()

const INIT_STATE = {
    products: [],
    currentList: {},
    topicToEdit: null,
    cartLength: getCountProductsInCart(),
    cart:{},
    chosenLength: getCountProductsInChosen(),
    chosen:{}
}

const reducer = ( state = INIT_STATE, action ) => {
    switch(action.type){
         case "GET_TOPICS":
             return { ...state, products: action.payload}
         case "GET_DETAILS":
             return { ...state, currentList: action.payload}
         case "EDIT_TODO":
             return {...state, topicToEdit: action.payload}
         case "CHANGE_CART_COUNT":
             return { ...state, cartLength: action.payload}
         case "GET_CART":
             return { ...state, cart: action.payload}
         case "CHANGE_CHOSEN_COUNT":
             return { ...state, chosenLength: action.payload}
         case "GET_CHOSEN":
             return { ...state, chosen: action.payload}
         default:
               return state
    }
}

const ProductContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(reducer, INIT_STATE)

    async function getTopics(params){
        const { data } = await axios(`http://localhost:8001/topics?${params}`)
           dispatch({
               type: "GET_TOPICS",
               payload: data
           })
    }

    async function addMainTopic(topic){
        await axios.post('http://localhost:8001/topics', topic)
        getTopics()
    }


    //! ///////
    async function addDetails(id){
        const { data } = await axios(`http://localhost:8001/topics/${id}`)
         dispatch({
             type: "GET_DETAILS",
             payload: data
         })
    }

    async function deleteTopic(id){
        await axios.delete(`http://localhost:8001/topics/${id}`)
        getTopics()
    }


   async function editTopic(id){
       let { data } = await axios(`http://localhost:8001/topics/${id}`)
         dispatch({
             type: "EDIT_TODO",
             payload: data
         })
   }

   const saveTask = async (newTask) => {
       axios.patch(`http://localhost:8001/topics/${newTask.id}`, newTask)
   }




   function addProductToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart"))
    if(!cart){
      cart = {
        products: [],
        totalPrice: 0
      }
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: 0
    }
    let filteredCart = cart.products.filter(elem => elem.item.id === product.id)
    if(filteredCart.length > 0){
      cart.products = cart.products.filter(elem => elem.item.id !== product.id)
    }else{
      cart.products.push(newProduct)
    }
    newProduct.subPrice = calcSubPrice(newProduct)
    cart.totalPrice = calcTotalPrice(cart.products)

    localStorage.setItem("cart", JSON.stringify(cart))
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length
    })
    
   }

   function getCart(){
    let cart = JSON.parse(localStorage.getItem("cart"))
    if(!cart){
      cart = {
        products: [],
        totalPrice: 0
      }
    }
    dispatch({
      type:  "GET_CART",
      payload: cart
    })
  }



  function changeProductCount(count, id){
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.products = cart.products.map(elem => {
      if(elem.item.id === id){
        elem.count = count
        elem.subPrice = calcSubPrice(elem)
      }
      return elem
    })
    cart.totalPrice = calcTotalPrice(cart.products)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
  }




  





  function addProductToChosen(product){
    let chosen = JSON.parse(localStorage.getItem("chosen"))
    if(!chosen){
      chosen= {
        products: [],
        totalPrice: 0
      }
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: 0
    }
    let filteredCart = chosen.products.filter(elem => elem.item.id === product.id)
    if(filteredCart.length > 0){
      chosen.products = chosen.products.filter(elem => elem.item.id !== product.id)
    }else{
      chosen.products.push(newProduct)
    }
    newProduct.subPrice = calcSubChosen(newProduct)
    chosen.totalPrice = calcTotalChosen(chosen.products)

    localStorage.setItem("chosen", JSON.stringify(chosen))
    dispatch({
      type: "CHANGE_CHOSEN_COUNT",
      payload: chosen.products.length
    })
    
   }



   function getChosen(){
    let chosen = JSON.parse(localStorage.getItem("chosen"))
    if(!chosen){
      chosen = {
        products: [],
        totalPrice: 0
      }
    }
    dispatch({
      type:  "GET_CHOSEN",
      payload: chosen
    })
  }



  function changeProductChosen(count, id){
    let chosen = JSON.parse(localStorage.getItem("chosen"))
    chosen.products = chosen.products.map(elem => {
      if(elem.item.id === id){
        elem.count = count
        elem.subPrice = calcSubChosen(elem)
      }
      return elem
    })
    chosen.totalPrice = calcTotalChosen(chosen.products)
    localStorage.setItem('chosen', JSON.stringify(chosen))
    getChosen()
  }




  function deleteChosen(index){
    let chosen = JSON.parse(localStorage.getItem("chosen"))
    chosen.splice(index, 1)
    localStorage.setItem('chosen', JSON.stringify(chosen))
  }
  





    return (
        <productContext.Provider value={{
            products: state.products,
            currentList: state.currentList,
            topicToEdit: state.topicToEdit,
            cartLength: state.cartLength,
            cart: state.cart,
            chosenLength: state.chosenLength,
            chosen: state.chosen,
            getCart,
            changeProductCount,
            addProductToCart,
            getTopics,
            addMainTopic,
            addDetails,
            deleteTopic,
            editTopic,
            saveTask,
            addProductToChosen,
            getChosen,
            changeProductChosen,
            deleteChosen,
            dispatch
        }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;