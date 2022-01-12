import { screenML } from '../../base/variables.js'
const mainBody = document.querySelector('#main')
// === header funcion ===
// HEADER-ITEMS
const headerItems = document.querySelectorAll('.header__navbar-item--js')
const headerNavList = document.querySelector('.header__navbar-nav-list--js')
const headerItemsHasSub = document.querySelectorAll('.header__navbar-item--has-sub--js')
const headerSubItems = document.querySelectorAll('.header__navbar-sub-item--js')
const headerVehicleItem = document.querySelector('.header-vehicles--js')
const headerShoppingToolsItem = document.querySelector('.header-shopping-tools--js')
const headerDiscoverItem = document.querySelector('.header-discovers--js')
const headerSearchItem = document.querySelector('.header-search--js')
const menuBarBtn = document.querySelector('.menu-bar-btn--js')


// HEADER SUB ITEMS
//VEHICLES-SECTION
const vehicleProducts = document.querySelector('.header-sub-vehicle-products--js')
const vehicleProductsBody = vehicleProducts.querySelector('.header-sub-vehicle-products-body--js')
const vehicleProductsNavbar = vehicleProducts.querySelector('.header-sub-vehicle-products-navbar--js')
const vehicleProductsList = vehicleProducts.querySelector('.header-sub-vehicle-products-list--js')
const vehicleProductsItems = vehicleProducts.querySelectorAll('.header-sub-vehicle-products-item--js')
const vehicleProductsTitles = document.querySelectorAll('.header-sub-vehicle-products-title--js')
const vehicleProductsCards = document.querySelectorAll('.header-sub-vehicle-products-card--js')

//SHOPPING-TOOLS-SECTION
const shoppingToolsSection = headerShoppingToolsItem.querySelector('.header-sub-shopping-tools--js')

//DISCOVERS-SECTION
const discoversSection = headerDiscoverItem.querySelector('.header-sub-discovers--js')

//SEARCH-SECTION
const searchSection = headerSearchItem.querySelector('.header-sub-search--js')

// HEADER FUNCTION
// remove active class of header__navbar-item when click out side
window.document.addEventListener('click', function (e) {
    if (e.target.closest('.header__navbar-item--js')) {
        return
    } else {
        headerItems.forEach((item) => {
            item.classList.remove('header__navbar-item--active')
            RotateArrowIcon(item)
            HeaderSubSectionEditAnimate()
        })
    }
})

// add or remove active class for header__navbar-item
headerItems.forEach((item, index) => {
    item.addEventListener('click', function () {
        if (index == 0) {
            headerItems.forEach((item) => {
                item.classList.remove('header__navbar-item--active')
                RotateArrowIcon(item)
                HeaderSubSectionEditAnimate()
            })
            return
        }
        else {
            if (item.classList.contains('header__navbar-item--active')) {
                item.classList.remove('header__navbar-item--active')
            } else {
                headerItems.forEach((item) => {
                    item.classList.remove('header__navbar-item--active')
                    RotateArrowIcon(item)
                })
                item.classList.add('header__navbar-item--active')
            }
        }
        RotateArrowIcon(item)
        HeaderSubSectionEditAnimate()
    })

})
HeaderSubSectionStopBubble()

//prevent bubbling of addEventListener for
function HeaderSubSectionStopBubble() {
    // header-sub-vehicle-products-body
    vehicleProductsBody.addEventListener('click', function (e) {
        e.stopPropagation()
    })
    // header-sub-shopping-tools
    shoppingToolsSection.addEventListener('click', function (e) {
        e.stopPropagation()
    })
    // header-sub-discovers
    discoversSection.addEventListener('click', function (e) {
        e.stopPropagation()
    })
    // header-sub-search
    searchSection.addEventListener('click', function (e) {
        e.stopPropagation()
    })
}

// rotate arrow icon header__navbar-down-arrow-icon--js
function RotateArrowIcon(e) {
    if (e.firstElementChild.querySelector('.header__navbar-down-arrow-icon--js') != null) {
        if (e.classList.contains('header__navbar-item--active')) {
            e.querySelector('.header__navbar-down-arrow-icon--js').style.transform = 'rotate(180deg)'
        } else {
            e.querySelector('.header__navbar-down-arrow-icon--js').style.transform = 'unset'
        }
    } else {
        return
    }
}

// HEADER SUB FUNCTION
// add aniamte for header-sub-vehicle-products-navbar and header-sub-vehicle-products-list
// vehicles-products__navbar-nav-item--active
function VehiclesSectionPC() {
    if (headerVehicleItem.classList.contains('header__navbar-item--active')) {
        if (window.innerWidth > screenML) {
            vehicleProductsNavbar.style.animationName = ('fadeInDown')
            vehicleProductsList.style.animationName = ('fadeInUp')
            vehicleProductsList.classList.add('show')
            vehicleProductsList.classList.remove('hide')
            vehicleProductsTitles.forEach((item) => {
                item.style.animationName = ('fadeInUp')
            })
            vehicleProductsCards.forEach((item) => {
                item.style.animationName = ('fadeInUp')
            })
            vehicleProducts.classList.add('show')
            vehicleProducts.classList.remove('hide')
        }
    } else {
        vehicleProducts.classList.remove('show')
        if (window.innerWidth > screenML) {
            vehicleProductsNavbar.style.animationName = ('fadeOutUp')
            vehicleProductsList.classList.remove('show')
            vehicleProductsList.style.animationName = ('fadeOutDown')
            setTimeout(function () { vehicleProductsList.classList.add('hide') }, 300)
            vehicleProductsTitles.forEach((item) => {
                item.style.animationName = ('none')
            })
            vehicleProductsCards.forEach((item) => {
                item.style.animationName = ('none')
            })
        }
        setTimeout(function () { vehicleProducts.classList.add('hide') }, 300)
    }
}

// add aniamte style for header-sub-shopping-tools
function ShoppingToolsSectionPC() {
    if (headerShoppingToolsItem.classList.contains('header__navbar-item--active')) {
        if (window.innerWidth > screenML) {
            shoppingToolsSection.style.animationName = 'fadeOutUp'
            shoppingToolsSection.style.animationName = 'fadeInDown'
            shoppingToolsSection.classList.remove('hide')
            shoppingToolsSection.classList.add('show')
        }
    } else {
        if (window.innerWidth > screenML) {
            shoppingToolsSection.style.animationName = 'fadeInDown'
            shoppingToolsSection.style.animationName = 'fadeOutUp'
            shoppingToolsSection.classList.remove('show')
        }
        setTimeout(function () { shoppingToolsSection.classList.add('hide') }, 300)
    }
}

// add aniamte style for header-sub-discovers
function DiscoverSectionPC() {
    if (headerDiscoverItem.classList.contains('header__navbar-item--active')) {
        if (window.innerWidth > screenML) {
            discoversSection.classList.remove('faceScaleOut-discovers-section')
            discoversSection.classList.add('fadeScaleIn-discovers-section')
            discoversSection.classList.remove('hide')
        }

    } else {
        if (window.innerWidth > screenML) {
            discoversSection.classList.remove('fadeScaleIn-discovers-section')
            discoversSection.classList.add('faceScaleOut-discovers-section')
        }
    }
}

// add aniamte style for header-sub-search
function SearchSectionPC() {
    if (headerSearchItem.classList.contains('header__navbar-item--active')) {
        if (window.innerWidth > screenML) {
            searchSection.classList.remove('faceScaleOut-search-section')
            searchSection.classList.add('fadeScaleIn-search-section')
        }
    } else {
        if (window.innerWidth > screenML) {
            searchSection.classList.remove('fadeScaleIn-search-section')
            searchSection.classList.add('faceScaleOut-search-section')
        }
    }
}

// change animate style for header sub section
function HeaderSubSectionEditAnimate() {
    // if screen is pc
    VehiclesSectionPC()
    ShoppingToolsSectionPC()
    DiscoverSectionPC()
    SearchSectionPC()
    // if screen is mobile and tablet
    if (window.innerWidth <= screenML) {
        headerItemsHasSub.forEach((item) => {
            if (item.classList.contains('header__navbar-item--active')) {
                item.querySelector('.header__navbar-sub-item--js').classList.add('header__navbar-sub-item--active')
                item.querySelector('.header__navbar-sub-item--js').classList.remove('hide')
            } else {
                item.querySelector('.header__navbar-sub-item--js').classList.remove('header__navbar-sub-item--active')
                item.querySelector('.header__navbar-sub-item--js').classList.add('hide')
            }
        })
    }
}


// === end header funcion ===