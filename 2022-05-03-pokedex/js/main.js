document.querySelector('#pokemonInputBtn').addEventListener('click', getFetch)

function getFetch(){
  const userInput = document.querySelector('#pokemonInput').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const pokeName = data.name[0].toUpperCase() + data.name.substring(1)
      const pokeImg = `../img/pokemon-by-id/${data.id}.webp`
      const pokeBlurb = `${pokeName} is a ${data.types[0].type.name} type pokemon. ${pokeName}'s average height is ${data.height}m and their average weight is ${data.weight}lbs.`

      document.querySelector('#dexPokeImg').src = pokeImg
      document.querySelector('#dexText').innerText = pokeBlurb


      console.log(data) // DEBUGING -- REMOVE
      console.log(`user typed: '${pokeName}'`) // DEBUGING -- REMOVE
      console.log(`image location: ${pokeImg}`) // DEBUGING -- REMOVE
      console.log(`blurb: ${pokeBlurb}`)

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}