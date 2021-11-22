import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import './Chosen.css'

const Chosen = () => {

    const { getChosen, chosen, changeProductChange } = useContext(productContext)


    useEffect(() =>{
        getChosen()
    }, [])



    function deleteChosen(id){
        let chosen = JSON.parse(localStorage.getItem("chosen"))
        let filteredCart = { ...chosen, products: chosen.products.filter(elem => elem.item.id !== id)}
        localStorage.setItem('chosen', JSON.stringify(filteredCart))
        getChosen()
      }
  
    
    return (
       
        <div className="mainChosen">
            {chosen.products ? chosen.products.map(elem => (  
                     <div className="chosen_card" key={elem.item.id}>
                         <Link to={`/details/${elem.item.id}`}>
                              <img src={elem.item.img} alt="" className="rolex"/>
                         </Link>
                           <span className="bran">{elem.item.brand}</span>
                           <div className="pric">{elem.item.price}</div>
                           <button className="Delete" onClick={() => deleteChosen(elem.item.id)}>x</button>
                     </div>              
                )):(
                <h1>Loading</h1>
            )}
        </div>
       
    );
};

export default Chosen;