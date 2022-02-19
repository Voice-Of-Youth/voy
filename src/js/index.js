// Search Bar Functionalitites

const searchBar = document.getElementById('search')
const searchIcon = document.querySelector('.search-submit')
const searchPlaceholder = document.getElementById('search-placeholder')

searchIcon.addEventListener('click', ()=> {
    searchBar.classList.toggle('is-search-active')
    searchPlaceholder.classList.toggle('placeholder-active')
})

