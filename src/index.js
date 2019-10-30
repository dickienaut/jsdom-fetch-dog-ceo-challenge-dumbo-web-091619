console.log('%c HI', 'color: firebrick')
let dogDiv = document.getElementById("dog-image-container")
let dogBreedUl = document.getElementById('dog-breeds')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogDropDown = document.getElementById("breed-dropdown")

// Add JavaScript so that:
//
// - on page load
// - fetch the images using the url above ⬆️
// - parse the response as `JSON`
// - add image elements to the DOM **for each**🤔 image in the array

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then(response => response.json())
.then((responsObject) => {
  responsObject.message.forEach(dogPlacer)
})


function dogPlacer(dog) {
  let dogImg = document.createElement('img')
  dogImg.src = dog
  dogImg.alt = "This is a doodie"
  dogDiv.append(dogImg)
}

function putDogsOnPage() {
  dogBreedUl.innerHTML = ''
  fetch(breedUrl)
  .then(response => response.json())
  .then((responseObject) => {
    for (const breed in responseObject.message) {
      if (responseObject.message[breed].length != 0) {
        responseObject.message[breed].forEach(function(subbreed){
          let createdList = document.createElement("li")
          createdList.innerText = `${subbreed} ${breed}`
          dogBreedUl.append(createdList)
      })
    }

    else {
      let createdList = document.createElement('li')
      createdList.innerText = breed
      dogBreedUl.append(createdList)
    }}})}

putDogsOnPage()


dogBreedUl.addEventListener("click", function(event) {
  if (event.target.tagName == 'LI') {
    event.target.style.color = 'red'

};


});


let dropDown = document.getElementById("breed-dropdown")

dropDown.addEventListener('change', function(event) {
  putDogsOnPage()
  let dogList = document.querySelectorAll('li')
  dogList.forEach(function(dogLi){
    if (dogLi.innerText[0] != event.target.value) {
      dogLi.remove()

    }

  })

})
