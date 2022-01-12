import {screenML} from '../../base/variables.js'

if ((window.innerWidth) > screenML) {
   
} else {
    document.querySelector('.header-sub-discovers--js').classList.add('animate__animated', 'animate__fast', 'hide')
    document.querySelector('.header-sub-discovers--js').classList.remove('faceScaleOut-discovers-section')
}