import { screenML,screenMD,scrollWidth } from '../../../base/variables.js'

if (window.innerWidth <= screenMD) {
    const introTopItem = document.querySelector('.intro__top-left--js')
    introTopItem.classList.remove('wow')
    const introTopRight = document.querySelector('.intro__top-right-container--js')
    introTopRight.querySelectorAll('*').forEach((item) => {
        item.classList.remove('wow')
    })
}

if (window.innerWidth > screenML) {
    document.querySelector('.intro__bottom--right--js').classList.add('animate__fadeInRight')
    document.querySelector('.intro__bottom--left--js').classList.add('animate__fadeInLeft')
}