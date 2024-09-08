import fetchCocktails from "./fetchCocktails.js"
import displayCocktails from "./displayCocktails.js"

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a'

const showCocktails = async () => {
    const data = await fetchCocktails(URL)
    displayCocktails(data)
}

export default showCocktails