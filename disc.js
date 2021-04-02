// const discMaker = document.querySelector('#maker')
// const discModel = document.querySelector('#model')
// const discSpeed = document.querySelector('#speed')
// const discImage = document.querySelector('#image')
// const discReviews = document.querySelector('#reviews')
// const discPrice = document.querySelector('#discPrice')
const queryParams = new URLSearchParams(window.location.search)
const discId = queryParams.get('id')
const showContainer = document.getElementById('show-container')


const handleResponse = (response) => {
    return response.json()
}

fetch(`http://localhost:3000/discs/${discId}`)
    .then(handleResponse)
    .then(disc => {
        console.log(disc)

        const discModel = document.createElement('h1')
        const discImage = document.createElement('img')
        const discMaker = document.createElement('h2')
        const discPrice = document.createElement('h3')
        const discAttributes = document.createElement('h4')

        discModel.innerText = `${disc.model}`  
        discMaker.innerText = `${disc.maker}`
        discAttributes.innerText = `${disc.speed}/ ${disc.glide}/ ${disc.turn}/ ${disc.fade}` 
        discImage.src = `${disc.image}`
        discPrice.innerText = `$${disc.price}`
        


        showContainer.append(discModel, discMaker, discAttributes, discImage, discPrice)
        
    })
    

    // const element = document.getElementById('addToBasket').className = ('animate__animated animate__bounceOut')
    // element.classtList.remove('animate__animated animate__bounceOut')
    // void element.offsetWidth
    // element.classList.add('animate__animated animate__bounceOut')