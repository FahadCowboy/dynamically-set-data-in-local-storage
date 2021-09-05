const displayFromLocal = () => {
    const localData = getLocalData()
    for(const data in localData){
        displayItems(data)
    }

}

const addItems = () => {
    const inputField = document.getElementById('input')
    const name = inputField.value
    inputField.value = ''
    displayItems(name)
    setLocalData(name)
}

const displayItems = name => {
    const ul = document.getElementById('cart-items')
    const li = document.createElement('li')
    li.innerText = name
    ul.appendChild(li)
}

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

const setLocalData = name => {
    const localData = getLocalData()
    localData[name] = 1
    const stringifiedData = JSON.stringify(localData)
    localStorage.setItem('cart', stringifiedData)
}


displayFromLocal()