//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', validate)

function validate(){
    let email = document.querySelector('input').value // get the user input from the text box.

    fetch(`https://www.disify.com/api/email/${email}`)
    .then(res => res.json()) // return json 
    .then(data => {
      console.log(data)
      // post result in dom
      if(data.format === false) {
        document.querySelector('h2').innerText = `This is an invalid email format`
      } else if(data.format === true) {
        document.querySelector('h2').innerText = `This is a valid email format`
        document.querySelector('#disposable').innerText = `Is this email address disposable? ${data.disposable}`
        document.querySelector('#domain').innerText = `Is this email domain real? ${data.dns}`
      }
    })
      .catch(err => {console.log(`error ${err}`)});
}