const addItems = () => {
    const inputField = document.getElementById('input')
    const name = inputField.value
    inputField.value = ''

    displayItems(name)
}

const displayItems = name => {
    const ul = document.getElementById('cart-items')
    const li = document.createElement('li')
    li.innerText = name
    ul.appendChild(li)
}