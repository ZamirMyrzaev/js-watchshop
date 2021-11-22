import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import './ProductModal.css'


const ProductModal = () => {

    const { addMainTopic } = useContext(productContext);
    const [ brand, setBrand ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ img, setImg ] = useState('');
    const [ description, setDescription ] = useState('');



    function clean(){
        setBrand('')
        setPrice('')
        setImg('')
        setDescription('')
    }

    function handleAddTopic(){
        const newTopic = {
            brand: brand,
            price: price,
            img: img,
            description: description
        }
        addMainTopic(newTopic)
        clean()
    }


    return (
        <>
        <div className="add-topic">
            <div className="add-sub-topic">
                <input 
                      type="text" 
                      placeholder="Brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      />
                <input 
                      type="text" 
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      />
                <input 
                      type="text" 
                      placeholder="Img URL"
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                      />
                <input 
                      type="text" 
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      />
                <Link to="/">
                     <button onClick={handleAddTopic} className="btnSave">Save</button>
                </Link>     
            </div>
        </div>
        </>
    );
};

export default ProductModal;