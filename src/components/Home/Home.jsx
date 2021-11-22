import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ProductList from '../AddProduct/ProductList';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const Home = () => {
    return (
        <>
            <AddProduct />
            <Main />
            <ProductList />
            <Footer />
        </>
    );
};

export default Home;