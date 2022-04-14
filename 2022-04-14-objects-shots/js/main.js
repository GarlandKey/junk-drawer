//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value // get the user input from the text box.

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // return json 
    .then(data => {
      document.querySelector('h2').innerText = data.drinks[0].strDrink // drink name in dom
      document.querySelector('img').src = data.drinks[0].strDrinkThumb // pic in dom
      document.querySelector('h3').innerText = data.drinks[0].strInstructions // directions in dom
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

