import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import './EditProduct.css'

const EditProducts = () => {
    const { topicToEdit, saveTask } = useContext(productContext)
    const [ change, setChange ] = useState(topicToEdit)

    useEffect(() => {
        setChange(topicToEdit)
    }, [topicToEdit])



    function handleEditInput(e){
        let newTask = {
            ...change,
            brand: e.target.value
        }
        setChange(newTask)
    }

    function handleEditInput2(e){
        let newTask = {
            ...change,
            price: e.target.value
        }
        setChange(newTask)
    }

    function handleEditInput3(e){
        let newTask = {
            ...change,
            img: e.target.value
        }
        setChange(newTask)
    }


    function handleEditInput4(e){
        let newTask = {
            ...change,
            description: e.target.value
        }
        setChange(newTask)
    }



    return (
        <>
        <div>
           {change ? 
           
          <div className="add-topic">
              <div className="add-sub-topic">
                <input 
                      type="text" 
                      placeholder="Brand"
                      value={change.brand}
                      onChange={handleEditInput}
                      />
                <input 
                      type="text" 
                      placeholder="Price"
                      value={change.price}
                      onChange={handleEditInput2}
                      />
                <input 
                      type="text" 
                      placeholder="Img URL"
                      value={change.img}
                      onChange={handleEditInput3}
                      />
                <input 
                      type="text" 
                      placeholder="Description"
                      value={change.description}
                      onChange={handleEditInput4}
                      />
                 <Link to={`/details/${change.id}`}>
                     <button onClick={() => saveTask(change)}>Save</button>
                 </Link>
              </div>
           </div>
           : <h1>Loading</h1>}
        </div>
        </>
    );
};

export default EditProducts;