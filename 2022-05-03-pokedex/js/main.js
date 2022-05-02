/* 
 * 
 */
document.querySelector('button').addEventListener('click', logIt)
// document.querySelector('button').addEventListener('click', getFetch)

function logIt() {
  const pokemon = document.querySelector('#pokemonInput').value
  console.log(`user typed: '${pokemon}`)
}


/*function getFetch(){
  const pokemon = document.querySelector('#pokemon-input').value
  console.log(pokemon)
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/
/*`${pokemon}is a ${data.types.0.type.name} pokemon. Average height is ${data.height} foot and avegate weight is ${data.weight} pounds.`*/

