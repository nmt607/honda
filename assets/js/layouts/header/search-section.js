import { screenML, scrollWidth } from '../../base/variables.js'

// scroll to input when focus on the mobile device
const navBarList = document.querySelector('.header__navbar-nav-list--js')
const inputField = $('.nav-search-mobile__content-input')
var windowHeight = window.innerHeight
if ((window.innerWidth) <= screenML) {
    inputField.focusin(function () {
        var windowHeightTemp = window.innerHeight
        if (windowHeightTemp < windowHeight) {                   
            setTimeout(function () {
                navBarList.scrollTo({ top: 330 });
            }, 0)
        }      
    })      
}


if (window.innerWidth > screenML) {
} else {
    document.querySelector('.header-sub-search--js').classList.remove('faceScaleOut-search-section')
}


