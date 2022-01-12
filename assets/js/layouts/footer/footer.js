import { screenLG } from '../../base/variables.js'
//render src img for footer-linked__img
const linkedImg = document.querySelectorAll('.footer-linked__img--js')
linkedImg.forEach((item, index) => {
    item.src = `./assets/img/footer-logo-${index + 1}.jpg`
})

// stop collapse when sreen width > 992px and 
// add funcion click to title change background and icon with screen else
const footerServiceTitles = $('.footer-service__title--js')
const footerServiceLists = $('.footer-service__list--js')
if ((window.innerWidth) > screenLG + 0.02) {
    footerServiceTitles.attr('data-toggle', '')
    footerServiceLists.removeClass('collapse')
} else {
    footerServiceTitles.click(function () {
        footerServiceTitles.each(function (index, item) {
            if ($(item).siblings().hasClass('show')) {
                $(item).closest('.footer-service__content--js').css('background-color', '#F5F5F5')
                $(item).find('.footer-service__title-icon--plus--js').css('display', 'block')
                $(item).find('.footer-service__title-icon--minus--js').css('display', 'none')
                return false
            }
        })
        if ($(this).siblings().hasClass('show')) {
            $(this).closest('.footer-service__content--js').css('background-color', '#F5F5F5')
            $(this).find('.footer-service__title-icon--plus--js').css('display', 'block')
            $(this).find('.footer-service__title-icon--minus--js').css('display', 'none')
        } else {
            $(this).closest('.footer-service__content--js').css('background-color', 'white')
            $(this).find('.footer-service__title-icon--plus--js').css('display', 'none')
            $(this).find('.footer-service__title-icon--minus--js').css('display', 'block')
        }
    })
}
