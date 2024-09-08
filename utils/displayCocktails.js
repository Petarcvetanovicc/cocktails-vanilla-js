const containerSection = document.querySelector('.container-section')

const displayCocktails = (cocktails) => {
    
    if(!cocktails.drinks){
        containerSection.innerHTML = `<p class="alert">No Items</p>`
        return
    }

    const section = cocktails.drinks.map(function(item){
        return `<a href="single-cocktail.html" class="product">
    <article data-id="${item.idDrink}">
        <img src="${item.strDrinkThumb}" alt="">
        <h3>${item.strDrink}</h3>
    </article>
</a>`
    }).join('')

    containerSection.innerHTML = section

    const links = containerSection.querySelectorAll('.product')
    links.forEach(function(link){
        link.addEventListener('click', function(e){
            const element = e.currentTarget.firstElementChild.dataset.id
            localStorage.setItem('id', element)
        })
    })
}

export default displayCocktails