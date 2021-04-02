const discURL = "http://localhost:3000/discs"
const discContainer = document.querySelector('#discContainer')
const discModel = document.querySelector('#model')
    
const discSpeed = document.querySelector('#speed')
const discImage = document.querySelector('#image')
// const discReviews = document.querySelector('#reviews')
const discPrice = document.querySelector('#discPrice')


const handleResponse = (response) => {
    return response.json()
}

fetch(discURL)
.then(handleResponse)
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
    discModel.innerHTML = `<a href="disc.html?id=${disc.id}">${disc.model}</a>`
    discSpeed.innerText = `${disc.speed}/ ${disc.glide}/ ${disc.turn}/  ${disc.fade}`
    discImage.src = disc.image
    
    // discReviews.innerText = disc.reviews
    
    discCard.append(discMaker, discModel, discSpeed, discImage )
    discContainer.append(discCard)
    
}
const searchButton = document.getElementById('searchButton')
const searchQuery = document.getElementById('maker')
const searchResults = document.getElementById('#searchResults')


// document.getElementById('searchButton').addEventListener('click', (handleSearchClick));

// fetch(discURL)
//     .then(handleResponse)
//     // .then((json) => displayCharacters(json.results))
//     .then((json) => displayCharacters(json))
    


//     function displayCharacters(characterList) {
//     console.log(characterList)
//     }

    
//     function handleSearchClick(e) {
//         const makerQuery = document.getElementById('searchQuery').value
        
//         fetch(`${DiscURL}?maker=${makerQuery}`)
//         .then(handleResponse)
//         .then((json) => displayCharacters(json))
//     }







    