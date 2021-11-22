import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import './ProductDetails.css'

const ProductDetails = () => {

    const { currentList, addDetails, deleteTopic, editTopic } = useContext(productContext)
    const [ deleteTask, setDeleteTask ] = useState({})

    let params = useParams().id;

    useEffect(() => {
        addDetails(params)
    })

    useEffect(() => {
        setDeleteTask(currentList.id)
    }, [currentList])

    

    return (
            <div className="details_block">
                <div>
                     <img src={currentList.img} alt="" className="details_rolex"/>
                </div>
                <div className="details_block_2">
                     <p className="details_brand">{currentList.brand}</p>
                     <div className="details_price">{currentList.price}</div>
                     <p className="details_description">{currentList.description}</p>
                     <Link to="/">
                          <button onClick={() => deleteTopic(deleteTask)} className="btnDelete">Delete</button>
                     </Link>
                     <Link to={`/edit/${currentList.id}`}>
                          <button onClick={() => editTopic(currentList.id)} className="btnEdit">Edit</button>
                     </Link>
                     
                </div>
            </div>
    );
};

export default ProductDetails;