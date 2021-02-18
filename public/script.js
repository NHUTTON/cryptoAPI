const baseURL = 'http://api.coinlayer.com/api/'
const key = '0fa177652921fc899c889ab0e8785479'
let url;

//     live?access_key=    put before key in URL   
//     add live for the most current data
const chartDiv = document.querySelector('#chartDiv')
const search = document.querySelector('form')
const randomCrypto = document.querySelector('nav-link')
const form = document.querySelector('form')
const info = document.querySelector('.info')
const searchTerm = document.querySelector('#searchTerm')
const home = document.getElementById('#homeBtn')
let results;
let liveRates;


function fetchResults() {
         fetch(`${baseURL}list?access_key=${key}`)
         .then(function(result){
         return result.json()
      }) 
         .then(function(json){
            results = json.crypto
            console.log(results)
   })
}

fetchResults();

search.addEventListener('submit', displayResults)

function displayResults(e){
   e.preventDefault();

   while (chartDiv.firstChild){
      chartDiv.removeChild(chartDiv.firstChild)
   }
   console.log(searchTerm.value)
   
   for(let stock in results){
      let currentObject = results[stock]
      currentObject.name = currentObject.name.toLowerCase();
      currentObject.symbol = currentObject.symbol.toLowerCase();
      searchTerm.value = searchTerm.value.toLowerCase();
      
  
      if (currentObject.name === searchTerm.value ||  currentObject.symbol === searchTerm.value){
      let stockName = document.createElement('h2')
      let stockImg = document.createElement('img')
      let stockN = currentObject.name.toUpperCase()
      let stockLogo = currentObject.icon_url
      let stockSym =currentObject.symbol.toUpperCase();
      stockName.textContent = `${stockN} (${stockSym})`
      stockImg.src = `${stockLogo}`
      chartDiv.appendChild(stockName)
      chartDiv.appendChild(stockImg)
         }
    }
}


    // function liveResults() {
//    fetch(`${baseURL}live?access_key=${key}`)
//    .then(function(liveResult){
//    return liveResult.json()
// }) 
//    .then(function(liveJson){
//       liveRates = liveJson.rates
//       console.log(liveRates)
//       return liveRates
// })
// }

// liveResults();


   // for (let ticker in liveRates) {
   //    let currentPrice = liveRates[ticker]
   //    let tickerText = document.createElement('h2')
   //    if (searchTerm.value === currentPrice) {
   //    tickerText.textContent = `${currentPrice}`
   //    chartDiv.appendChild(tickerText)
   //    }