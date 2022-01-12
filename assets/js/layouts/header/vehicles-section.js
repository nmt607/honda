import { screenML } from '../../base/variables.js'
// === vehicles section funcion ===

// add class to render background for header-sub-vehicle-products-card-img
const vehiclesItems = document.querySelectorAll('.header-sub-vehicle-products-container--js')
vehiclesItems.forEach((vehiclesItem, index) => {
    let vehiclesCardImgs = vehiclesItem.querySelectorAll('.header-sub-vehicle-products-card-img--js')
    vehiclesCardImgs.forEach((vehiclesCardImg, index) => {
        index = index + 1
        vehiclesCardImg.classList.add('vehicles-products__card-top-img--' + index)
    })
})

// add delay class for each header-sub-vehicle-products-title and header-sub-vehicle-products-card
const vehiclesTitles = document.querySelectorAll('.header-sub-vehicle-products-title--js')
const vehiclesCards = document.querySelectorAll('.header-sub-vehicle-products-card--js')
vehiclesCards.forEach((item, index) => {
    if ((window.innerWidth > screenML)) {
        item.classList.add(`delay-${index}`)
        if (index < vehiclesTitles.length) {
            vehiclesTitles[index].classList.add(`delay-${index * 3}`)
        }
    }
})

const vehiclesNavBarItems = document.querySelectorAll('.vehicles-products__navbar-nav-item--js')
// click nav bar item remove active or add active and show or hide vehicles-products__item had target
if (window.innerWidth > screenML) {
    vehiclesNavBarItems[0].classList.add('vehicles-products__navbar-nav-item--active')
}
vehiclesNavBarItems.forEach((item) => {
    item.addEventListener('click', function () {
        vehiclesNavBarItems.forEach((item) => {
            item.classList.remove('vehicles-products__navbar-nav-item--active')
        })
        item.classList.add('vehicles-products__navbar-nav-item--active')
        if (window.innerWidth <= screenML) {
            let itemID = item.querySelector('.vehicles-products__navbar-nav-link--js').getAttribute("href")
            itemID = itemID.substring(1)
            vehiclesProducsList.classList.remove('animate__fast','animate__slideOutRight', 'hide')
            vehiclesProducsList.classList.add('animate__slow', 'animate__bounceInRight', 'show')
            const targetELementById = document.getElementById(itemID)
            targetELementById.classList.add('vehicles-products__item--active', 'show')
            targetELementById.classList.remove('hide')
        }
    })
})


// back to menu vehicles-products__navbar
const backtToVehicleMenuBtns = document.querySelectorAll('.vehicles-products__title-icon-back--js')
const vehiclesProducsList = document.querySelector('.header-sub-vehicle-products-list--js')
const vehicleItems = document.querySelectorAll('.header-sub-vehicle-products-item--js')
if (window.innerWidth <= screenML) {
    vehicleItems.forEach((item) => {
        item.classList.add('hide')
    })
}
backtToVehicleMenuBtns.forEach((item) => {
    item.addEventListener('click', function () {
        vehiclesNavBarItems.forEach((item) => {
            item.classList.remove('vehicles-products__navbar-nav-item--active')
        })
        vehiclesProducsList.classList.remove('animate__slow')
        vehiclesProducsList.classList.add('animate__fast', 'animate__slideOutRight')
        vehiclesProducsList.classList.remove('show')
        vehicleItems.forEach((item) => {
            item.classList.remove('vehicles-products__item--active', 'show')
            setTimeout(function () {
                item.classList.add('hide')
                vehiclesProducsList.classList.add('hide')
            }, 300)
        }) 
    })
})

// change animation for header-sub-vehicle-products-title--js and header-sub-vehicle-products-card--js when <= sreenML
const vehiclesProductItemTitle = document.querySelectorAll('.header-sub-vehicle-products-title--js')
const vehiclesProductItemCards = document.querySelectorAll('.header-sub-vehicle-products-card--js')
if (window.screen.width <= screenML) {
    vehiclesProductItemTitle.forEach((item) => {
        item.style.animation = 'none'
    })
    vehiclesProductItemCards.forEach((item) => {
        item.style.animation = 'none'
    })
}
// === end vehicles section funcion ===

function backtToVehicleMenu () {
    vehiclesNavBarItems.forEach((item) => {
        item.classList.remove('vehicles-products__navbar-nav-item--active')
    })
    vehiclesProducsList.classList.remove('animate__slow')
    vehiclesProducsList.classList.add('animate__fast')
    vehiclesProducsList.classList.remove('show')
    vehicleItems.forEach((item) => {
        item.classList.remove('vehicles-products__item--active', 'show')
        setTimeout(function () {
            item.classList.add('hide')
            vehiclesProducsList.classList.add('hide')
        }, 300)
    })   
}
export {backtToVehicleMenu}