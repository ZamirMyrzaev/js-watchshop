import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../context/ProductContext';
import ProductCard from './ProductCard';
import MainPagination from './MainPagination';
import './ProductList.css'
import history from '../../helpers/history';
import FilterBrand from '../FilterBrand/FilterBrand';


const ProductList = () => {

    const { getTopics, products } = useContext(productContext)
    const [ card, setCard ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ cardsPerPage ] = useState(6)
    const [ searchValue, setSearchValue ] = useState('')


    useEffect(() => {
        getTopics()
    }, [])




    useEffect(() => {
        const getCards = () => {
            setLoading(true)
            setCard(products)
            setLoading(false)
        }
        getCards()
    }, [])


    const lastIndex = currentPage * cardsPerPage
    const firstIndex = lastIndex - cardsPerPage
    const currentCard = products.slice(firstIndex, lastIndex)


 console.log(currentCard)
    

    function paginate(pageNumber){
        setCurrentPage(pageNumber)
    }

    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)



    function handleValue(e){
        const search = new URLSearchParams(history.location.search)
        search.set('q', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setSearchValue(e.target.value)
        getTopics(search.toString())
    }

    
    

    return (
        <>

    <div className="main">
        <p className="text_arrivals">NEW ARRIVALS</p>
        <div className="bg-line3"></div>
            <input 
                  name="q"
                  type="search" 
                  className="search" 
                  onChange={handleValue}
                  placeholder="    Search..."
                  />

            <div className='radioInput'>
                <FilterBrand />
            </div>


        <div className="mainCard">
            {currentCard ? currentCard.map(item => (
                <ProductCard key={item.id} item={item} />
                )) : <h1>loading</h1>}
            <div className="pgnBlock">
                  <MainPagination 
                      cardsPerPage={cardsPerPage}
                      totalCards={products.length}
                      paginate={paginate}
                      cardsPerPage={cardsPerPage}
                      />
                  <div className="btnBlock">
                        <button onClick={prevPage} className="prev">prev</button>
                        <button onClick={nextPage} className="next">next</button>
                  </div>
            </div>    
        </div>
    </div>
        </>
    );
};

export default ProductList;