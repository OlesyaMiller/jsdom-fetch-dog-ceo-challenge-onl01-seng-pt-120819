console.log('%c HI', 'color: firebrick')

// let breeds = []

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const listElements = document.querySelectorAll("li")

document.addEventListener('DOMContentLoaded', function() {
    fetchImages(imgUrl)
    fetchBreeds(breedUrl)
})

function fetchImages(url) {
    fetch(url)
    .then(resp => resp.json())
    .then(json => addImagesToDom(json))
}

function fetchBreeds(url, filter) {
    fetch(url)
    .then(resp => resp.json())
    .then(json => 
        // breeds = [...Object.keys(json.message)]
        // console.log(breeds)
        // console.log(Object.keys(json.message))
        addBreedsToDom(json, filter))
    addBreeds() //why are we calling this function here?
}

function addImagesToDom(images) {
    const imgContainer = document.querySelector("#dog-image-container")
    images["message"].forEach(image => {
        const imageTag = document.createElement("img")
        imageTag.src = image 
        imgContainer.appendChild(imageTag) 
    });
}

function addBreedsToDom(breeds, filter) {
    const breedsUl = document.querySelector("#dog-breeds")
    breedsUl.innerHTML = ""
    for (breed in breeds.message) {
        const breedLi = document.createElement("li")
        breedLi.innerText = breed
        breedLi.addEventListener("click", changeColor)
        if (filter) {
            if (breed[0] === filter) {
                // const breedLi = document.createElement("li")
                // breedLi.innerText = breed 
                breedsUl.appendChild(breedLi)
                // breedLi.addEventListener("click", changeColor)
            }
        } else {
            breedsUl.appendChild(breedLi)
        }
    }
}

function filterBreeds(letter) {
    fetchBreeds(breedUrl, letter)    
}

function addBreeds() {
    let breedDropdown = document.querySelector("#breed-dropdown")
    breedDropdown.addEventListener("change", function(event) {
        filterBreeds(event.target.value)
    })
}

function changeColor(event) {
    event.target.style.color = "red"
}

