import { screenML,screenMD,scrollWidth } from '../../../base/variables.js'

if (window.innerWidth <= screenMD) {
    const introTopItem = document.querySelector('.intro__top-left--js')
    introTopItem.classList.remove('wow')
    const introTopRight = document.querySelector('.intro__top-right-container--js')
    introTopRight.querySelectorAll('*').forEach((item) => {
        item.classList.remove('wow')
    })
}