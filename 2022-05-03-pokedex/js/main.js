//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const pokemon = document.querySelector('#poke1').value
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  let pokeStore = []
  let pokeImg = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
      
          if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
            document.querySelector('#pokeImg1').src = pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x > "
          }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}

function getPokemonImage(id) {

}

type =[
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water'
]