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
const home = document.querySelector('.navbar-brand')
let results;
let randomResults;

home.addEventListener('click', fetchResults)

function fetchResults() {
         fetch(`${baseURL}list?access_key=${key}`)
         .then(function(result){
         return result.json()
      }) 
         .then(function(json){
            results = json.crypto
   })

//    let randomDisplay = results => {
//       for(let stock in results){
//       randomObject = results[stock]
//       console.log(randomObject)
      
//       while (chartDiv.firstChild){
//          chartDiv.removeChild(chartDiv.firstChild)
//       }

//       let randomStock= document.createElement('h2')
//       let randomImage = document.createElement('img')
    
//       let randomS = randomObject.name
//       let randomPic = randomObject.icon_url
//       let randomSym = randomObject.symbol
//       randomStock.textContent = `${randomS} {${randomSym}}`
//       randomImage.src = randomPic

//       chartDiv.appendChild(randomStock)
//       chartDiv.appendChild(randomImage)
//    }
// }
//    randomDisplay()
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
      console.log(results)
      }
      }
    }


