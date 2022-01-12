import {backtToVehicleMenu} from '../header/vehicles-section.js'
const html = document.querySelector('html')
const mainBody = document.querySelector('#main')
const headerNavList = document.querySelector('.header__navbar-nav-list--js')
const headerSubItems = document.querySelectorAll('.header__navbar-sub-item--js')
const menuBarBtn = document.querySelector('.menu-bar-btn--js')

// active or not menu bar button
menuBarBtn.addEventListener('click', function (e) {
    if (menuBarBtn.classList.contains('menu-bar-btn--active')) {
        menuBarBtn.classList.remove('menu-bar-btn--active')
        headerNavList.classList.remove('header__navbar-nav-list--active')
        html.classList.remove('none-scroll')
        backtToVehicleMenu ()
        headerSubItems.forEach((item) => {          
            item.classList.remove('header__navbar-sub-item--active')           
        })
       
    } else {
        menuBarBtn.classList.add('menu-bar-btn--active')
        headerNavList.classList.add('header__navbar-nav-list--active')      
        html.classList.add('none-scroll')
    }
})

// back to menu header__navbar-nav-list
function backToHeaderNavBar (item) {
    item.closest('.header__navbar-item--has-sub--js').classList.remove('header__navbar-item--active')
    item.closest('.header__navbar-sub-item--js').classList.remove('header__navbar-sub-item--active')
    item.closest('.header__navbar-sub-item--js').classList.add('hide-on-tablet')
    setTimeout(function () {
        item.closest('.header__navbar-sub-item--js').classList.add('hide')
    }, 300)
}
const backToHeaderNavBars = document.querySelectorAll('.header__navbar-sub-item__navbar-nav-title-icon--js')
backToHeaderNavBars.forEach((item) => {
    item.addEventListener('click', function () {
        backToHeaderNavBar(item)
    })
})
