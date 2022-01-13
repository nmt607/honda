import {renderImg} from '../../../base/add-class-for-render-bg-img.js'
import { screenML,screenMD,scrollWidth } from '../../../base/variables.js'
// add class to render background for discover-card
renderImg('.discover-card')
if (window.innerWidth > screenML) {
    document.querySelector('.our-vehicles-tech__guides--js').classList.add('animate__fadeInRight')
    
}