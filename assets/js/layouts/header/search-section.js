import { screenML,screenSM, scrollWidth } from '../../base/variables.js'

// scroll to input when focus on the mobile device
const navBarList = document.querySelector('.header__navbar-nav-list--js')
const inputField = $('.nav-search-mobile__content-input')  
if ((window.innerWidth) <= screenML) {
    inputField.focusin(function () {       
        if (window.innerWidth <= screenSM + 0.02) {
            setTimeout(function () {
                navBarList.scrollTo({ top: 168 });
            }, 0)
        }      
    })      
}


if (window.innerWidth > screenML) {
} else {
    document.querySelector('.header-sub-search--js').classList.remove('faceScaleOut-search-section')
}


