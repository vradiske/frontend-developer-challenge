//function to check if the e-mail is valid on newsletter submit
function checkEmail () {
    let email = document.getElementById('email')
    const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if (!emailPattern.test(email.value)) {
        alert('O campo e-mail não é valido!')
        return false
    }

    return true
}

//function to get items from server
function getItems () {
    let url = document.getElementById('btn-page').getAttribute('page')
    fetch(url)
        .then(response => response.json())
        .then(response => {
            newCarditems(response.products)
            document.getElementById('btn-page').setAttribute('page', 'https://' + response.nextPage)
        })
        .catch(erro => {
            console.log(erro)
        })
}

//function to receive the response of products in array and make cards from it
function newCarditems (products) {
    let items = document.getElementById('items')
    products.forEach(element => {
        let card = document.createElement('div')
        card.classList.add('card-item')

        let img = document.createElement('img')
        img.classList.add('card-img')
        img.setAttribute('src', element.image)

        let title = document.createElement('p')
        title.classList.add('card-title')
        title.innerText = element.name

        let description = document.createElement('p')
        description.classList.add('card-description')
        description.innerText = element.description

        let oldPrice = document.createElement('p')
        oldPrice.classList.add('card-description')
        oldPrice.innerText = 'De: R$ ' + element.oldPrice.toFixed(2)

        let price = document.createElement('p')
        price.classList.add('card-price')
        price.innerText = 'Por: R$ ' + element.price.toFixed(2)

        let installments = document.createElement('p')
        installments.classList.add('card-description')
        installments.innerText = 'ou ' + element.installments.count + 'x de R$ ' + element.installments.value.toFixed(2)

        let btnBuy = document.createElement('button')
        btnBuy.classList.add('card-btn')
        btnBuy.innerText = 'Comprar'

        card.append(img, title, description, oldPrice, price, installments, btnBuy)
        items.append(card)
    })
}

getItems()