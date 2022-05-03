/* selectors */
const pokemonInputBtn = document.querySelector('#pokemonInputBtn')
const dexPokeImg = document.querySelector('#dexPokeImg')
const dexText = document.querySelector('#dexText')

pokemonInputBtn.addEventListener('click', getFetch)

function getFetch(){
  const userInput = document.querySelector('#pokemonInput').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const pokeName = data.name[0].toUpperCase() + data.name.substring(1)
      const pokeImg = `../img/pokemon-by-id/${data.id}.webp`
      const pokeBlurb = `${pokeName} is a ${data.types[0].type.name} type pokemon. ${pokeName}'s average height is ${data.height}m and their average weight is ${data.weight}lbs.`

      dexPokeImg.src = pokeImg
      dexText.innerText = pokeBlurb
      playText(pokeBlurb)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function playText(text) {
  const utterance = new SpeechSynthesisUtterance(text)
  speechSynthesis.speak(utterance)
}