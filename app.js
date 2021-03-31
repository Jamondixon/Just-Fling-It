const discURL = "http://localhost:3000/discs/"
const discContainer = document.querySelector('#discContainer')
const discMaker = document.querySelector('#maker')
const discModel = document.querySelector('#model')
const discSpeed = document.querySelector('#speed')
const discImage = document.querySelector('#image')
// const discReviews = document.querySelector('#reviews')
// const menuIcon = document.querySelector('#menu_icon')
const discPrice = document.querySelector('#discPrice')

const handleResponse = (response) => {
    return response.json()
}


fetch(discURL)
    .then(handleResponse)
    // .then((responseJson) => {
    //     console.log(responseJson)})
    .then(discs =>  { 
        discs.forEach(disc => createCard(disc))
    })

    function createCard(disc){
        const discCard = document.createElement('div')
        const discMaker = document.createElement('h2')
        const discModel = document.createElement('h3')
        const discSpeed = document.createElement('p')
        const discImage = document.createElement('img')
        // const discReviews = document.createElement('p')
        
            discCard.className = 'discCard'
            discMaker.innerText = disc.maker
            discModel.innerText = disc.model
            discSpeed.innerText = disc.speed
            discImage.src = disc.image
            // discReviews.innerText = disc.reviews

            discCard.append(discMaker, discModel, discSpeed, discImage )
            discContainer.append(discCard)
    }

    login_submit.addEventListener("click", (e) => {
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value
    
        if (username === "Jamonsta" && password === "disc") {
            alert("You have successfully logged in.");
            location.reload();
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    })
