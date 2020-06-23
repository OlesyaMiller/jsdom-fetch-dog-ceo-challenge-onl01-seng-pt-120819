console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const listElements = document.querySelectorAll("li")
const dropdownValue = document.querySelector("#breed-dropdown")
dropdownValue.addEventListener("change", filterBreeds(breedsUl))

function fetchImages(url) {
    fetch(url)
    .then(resp => resp.json())
    .then(json => addImagesToDom(json))
}

function fetchBreeds(url) {
    fetch(url)
    .then(resp => resp.json())
    .then(json => addBreedsToDom(json))
}

function addImagesToDom(images) {
    const imgContainer = document.querySelector("#dog-image-container")
    images["message"].forEach(image => {
        const imageTag = document.createElement("img")
        imageTag.src = image 
        imgContainer.appendChild(imageTag) 
    });
}

function addBreedsToDom(breeds) {
    const breedsUl = document.querySelector("#dog-breeds")
    for (breed in breeds.message) {
        const breedLi = document.createElement("li")
        breedLi.innerText = breed 
        breedsUl.appendChild(breedLi)
        breedLi.addEventListener("click", changeColor)
    }
}

function filterBreeds(breeds) {
    breeds.filter(function(breed) {
        // return breed.value[0] === dropdownValue
        console.log("Hi")
    })
}

function changeColor(event) {
    event.target.style.color = "red"
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImages(imgUrl)
    fetchBreeds(breedUrl)
})