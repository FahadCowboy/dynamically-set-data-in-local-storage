const displayFromLocal = () => {
    const localData = getLocalData()
    for(const data in localData){
        displayItems(data)
    }

}

// This function is for adding 'add items' botton
const addItems = () => {
    const inputField = document.getElementById('input')
    const name = inputField.value
    if(!name){
        return
    }
    inputField.value = ''
    displayItems(name)
    setLocalData(name)
}

//this function is to display items in the UI
const displayItems = name => {
    const ul = document.getElementById('cart-items')
    const li = document.createElement('li')
    li.innerText = name
    ul.appendChild(li)
}

//This function bring us the cart object if local storage has it, otherwise, it give us an empty object for further work
const getLocalData = () => {
    const cartObj = localStorage.getItem('cart')
    let parsedCartObj
    if(cartObj) {
        parsedCartObj = JSON.parse(cartObj)
    } else{
        parsedCartObj = {}
    }

    return parsedCartObj
}

//This function used to set data in the cart object associet in the local storage 
const setLocalData = name => {
    const localData = getLocalData()

    if(localData[name]){
        localData[name] = localData[name] + 1
    } else{
        localData[name] = 1 
    }
    
    const stringifiedData = JSON.stringify(localData)
    localStorage.setItem('cart', stringifiedData)
}

//This function is used to clear all the data from UI and local storage
const placeOrder = () => {
    document.getElementById('cart-items').textContent = ''
    localStorage.removeItem('cart')
}


displayFromLocal()