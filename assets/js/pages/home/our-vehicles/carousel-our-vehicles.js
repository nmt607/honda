import { screenML,screenMD,scrollWidth } from '../../../base/variables.js'
// Option carousel setting
$('#ourVehiclesCarousel').carousel({
    wrap: true,
    // interval: 3000,
});

const ourVehicleCarousel = $('#ourVehiclesCarousel')
const ourVehicleCarouselIndicator = $('.our-vehicles-carousel__indicators')
ourVehicleCarousel.on('slid.bs.carousel', function () {
    var ourVehicleCarouselIndicatorItemActive = $('.our-vehicles-carousel__indicators-item.active') 
    var scrollTo = ourVehicleCarouselIndicatorItemActive.offset().left  - ourVehicleCarouselIndicator.offset().left + ourVehicleCarouselIndicator.scrollLeft();   
    ourVehicleCarouselIndicator.animate({'scrollLeft': scrollTo}, 100)
});

const controlNext = $('.our-vehicles-carousel__indicators-control-next')
controlNext.click(function(){
    ourVehicleCarouselIndicator.animate({'scrollLeft': '+=130px'}, 100)
})
const controlPrev = $('.our-vehicles-carousel__indicators-control-prev')
controlPrev.click(function(){
    ourVehicleCarouselIndicator.animate({'scrollLeft': '-=130px'}, 100)
})

if (window.innerWidth > screenML) {
    document.querySelector('.our-vehicles-tech__guides--js').classList.add('animate__fadeInRight')
    document.querySelector('.our-vehicles-tech__certified--js').classList.add('animate__fadeInLeft')
}