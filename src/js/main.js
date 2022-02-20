// Search Bar Functionalitites

const searchBar = document.getElementById('search')
const searchIcon = document.querySelector('.search-submit')
const searchPlaceholder = document.getElementById('search-placeholder')

searchIcon.addEventListener('click', ()=> {
    searchBar.classList.toggle('is-search-active')
    searchPlaceholder.classList.toggle('placeholder-active')
})

// Hamburger Menu Functionality

const menu = document.querySelector('#mobile-bar-icon')
const menuLinks = document.querySelector('.navbar-menu')

menu.addEventListener('click', ()=> {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

menuLinks.addEventListener('click', ()=> {
    const menuBars = document.querySelector('.is-active');
    if(menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
})

