console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener('DOMContentLoaded', function() {
    fetchImages(imgUrl)
    fetchBreeds(breedUrl)
    const breedsUl = document.querySelector("#dog-breeds")
    const dropdownValue = document.querySelector("#breed-dropdown")
    console.log(dropdownValue)
    dropdownValue.addEventListener("change", (event) => {
        filterBreeds(breeds, event.target.value)
    })
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const listElements = document.querySelectorAll("li")

function fetchImages(url) {
    fetch(url)
    .then(resp => resp.json())
    .then(json => addImagesToDom(json))
}

function fetchBreeds(url) {
    fetch(url)
    .then(resp => resp.json())
    .then(json => { breeds = [...Object.keys(json.message)]
        // console.log(breeds)
        // console.log(Object.keys(json.message))
        addBreedsToDom(json)})
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

function filterBreeds(breeds, letter) {
    console.log("filterBreeds", breeds)

    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.filter(function(breed) {
        return breed[0] === letter 
        console.log(breed)
    })
}

function changeColor(event) {
    event.target.style.color = "red"
}