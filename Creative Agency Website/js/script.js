/* This toggles the menu button as well as the navigation page (which is styles to cover the entire screen). The event listener looks for a 'click' on the object and sets the 'active' class to the toggle and navigation classes */

const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})