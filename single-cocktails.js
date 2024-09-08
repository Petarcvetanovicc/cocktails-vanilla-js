import fetchCocktails from "./utils/fetchCocktails.js";

const singleProductContainer = document.querySelector('.single-cocktail-wrapper')
const singleProductURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function displaySingleCocktail(product){

    // img, title, desc, ingridients

    const drink = product.drinks[0]
    const {strDrink, strInstructions, strDrinkThumb} = drink
    const ingridients = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ]

    singleProductContainer.innerHTML = `<img src="${strDrinkThumb}" alt="">
    <section class="single-cocktail-info">
        <p class="single-cocktail-title">${strDrink}</p>
        <p class="single-cocktail-desciption">${strInstructions}</p>
        <ul>
            ${ingridients.map(function(item){
                if(!item){
                    return
                }
                return `<li>${item}</li>`
            }).join('')
        }
        </ul>
        <a href="index.html" class="back-home-btn">Back Home</a>
    </section>`
}

const showSingleProduct = async () => {
    const data = await fetchCocktails(`${singleProductURL}${localStorage.getItem('id')}`)
    displaySingleCocktail(data)
}

window.addEventListener('DOMContentLoaded', showSingleProduct)