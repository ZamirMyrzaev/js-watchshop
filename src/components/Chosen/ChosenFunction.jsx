export function getCountProductsInChosen(){
    let chosen = JSON.parse(localStorage.getItem("chosen"))
    return chosen ? chosen.products.length : 0
}

export function calcSubChosen(product){
    return product.count * product.item.price
}

export function calcTotalChosen(products){
    let totalPrice = 0
    products.forEach(item => {
        totalPrice += item.subPrice
    })
    return totalPrice
}

export function checkProductInChosen(id){
    let chosen = JSON.parse(localStorage.getItem("chosen"))
    if(!chosen){
      chosen = {
        products: [],
        totalPrice: 0
      }
    }
    let newChosen = chosen.products.filter(elem => elem.item.id === id)
    return newChosen.length > 0 ? true : false
}