function getPrice(){
    fetch(`https://www.bitstamp.net/api/v2/ticker/btcusd/`)
    .then(res => res.json()) // return json 
    .then(data => {
      console.log(data)
      // post result in dom
      document.querySelector('h2').innerText = data.last
    })
      .catch(err => {console.log(`error ${err}`)});
}

getPrice()