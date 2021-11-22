import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../context/ProductContext";
import { calcTotalPrice } from "./CartFunction"
import './Cart.css'

const Cart = () => {

  const { getCart, cart, changeProductCount, dispatch } = useContext(productContext)


  useEffect(() => {
      getCart()
  }, [])

   

  function deleteCart(id){
    let cart = JSON.parse(localStorage.getItem('cart'))
    let filteredCarts = { ...cart, products: cart.products.filter(e => e.item.id !== id)}
    localStorage.setItem('cart', JSON.stringify(filteredCarts))
    calcTotalPrice(cart.products)
    dispatch({
      type: "CHANGE_CHOSEN_COUNT",
      payload: filteredCarts.products.length
    })
    getCart()
}


  return(
      
    <div className="cart">
      {cart.products ? (

     
         <div>
           <table>
             <thead>
               <tr>
                 <th>Image</th>
                 <th>title</th>
                 <th>price</th>
                 <th>count</th>
                 <th>subprice</th>
                 <th>Delete</th>
               </tr>
             </thead>
              <tbody>
                {cart.products.map(elem => (
                   <>
                   
                  <tr key={elem.item.id}>
                    <td>
                      <img src={elem.item.img} alt="product img" />
                    </td>
                    <td>{elem.item.brand}</td>
                    <td>{elem.item.price}</td>
                    <td>
                      <input className='sum_input' value={elem.count} onChange={(e) => changeProductCount(e.target.value, elem.item.id)} type="number" min="1"/>
                    </td>
                    <td>{elem.subPrice}</td>
                    <td><button className='btn_cartdelete' onClick={() => deleteCart(elem.item.id)}>Delete</button></td>
                  </tr>
                  </>
                ))}
              </tbody>
           </table>
           <p>Total: {calcTotalPrice(cart.totalPrice)} сом</p>
           <Link to="/pay">
                <button className="btn_buy">Buy</button>
           </Link>
         </div>
          ) : (
            <h1>Loading</h1>
          )}
    </div>
  )
};

export default Cart;
