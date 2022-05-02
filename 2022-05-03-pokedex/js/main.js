document.querySelector('#pokemonInputBtn').addEventListener('click', getFetch)

function getFetch(){
  const pokemon = document.querySelector('#pokemonInput').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  
  console.log(`user typed: '${pokemon}'`) // DEBUGING -- REMOVE

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data) // DEBUGING -- REMOVE
      const pokeName = `../img/pokemon-by-id/${data.id}.webp`
      const pokeBlurb = `${pokemon} is a ${data.types[0].type.name} type pokemon. ${pokemon}'s average height is ${data.height} foot and their average weight is ${data.weight} pounds.`

      document.querySelector('#pokedexPokemonImage').src = pokeName`../img/pokemon-by-id/${data.id}.webp`


      console.log(`image location: ${pokemonImage}`) // DEBUGING -- REMOVE
      console.log(`blurb: ${pokemonBlurb}`)

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}