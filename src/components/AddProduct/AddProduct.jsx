// import Carousel from '../Carousel/MainCarousel'
import React from 'react';
import MainCarousel from '../Carousel/MainCarousel';
import './AddProduct.css'
import { Link } from 'react-router-dom';

const AddProduct = () => {
    return (
        <>
           
        <div className="products_block">
            <p className="list">PORTEN</p>
            <div className="solid"></div>
            <div className="collection">New Collection 2021</div>
            <Link to="/add">
                <button className="btn10">ADD PRODUCT</button>
            </Link>
        </div>

        
       <MainCarousel />

        </>
    );
};

export default AddProduct;