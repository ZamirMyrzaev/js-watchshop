import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import './ProductCard.css'
import { checkProductInCart } from '../Cart/CartFunction';
import imgHeart from '../../assets/heart.png'




const ProductCard = ({ item, id }) => {
    const { addProductToCart, addProductToChosen } = useContext(productContext)


    return (
        <div className="content_card">
            <Link to={`/details/${item.id}`}>
                <div>
                <img className="img_rolex" src={item.img} alt="" id={item.id}/>
                </div>
            </Link>
            <span className="brand">{item.brand}</span>
            <div className="price">{item.price}</div>
            <button className="btn_add" onClick={() => addProductToCart(item)} color={checkProductInCart(item.id) ? 'secondary' : 'primary'}>add</button>
            <img src={imgHeart} alt="" className="heart" onClick={() => addProductToChosen(item)}/>
        </div>
    );
};

export default ProductCard;