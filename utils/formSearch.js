import fetchCocktails from "./fetchCocktails.js"
import displayCocktails from "./displayCocktails.js"
import showCocktails from "./showCocktails.js"

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const form = document.querySelector('.form')
const input = document.querySelector('.text-input')

form.addEventListener('keyup', async (e) => {
    e.preventDefault()
    
    const value = input.value
    if(value === ''){
        showCocktails()
    }else {
        const data = await fetchCocktails(`${baseURL}${value}`)
        displayCocktails(data)
    }
    
})