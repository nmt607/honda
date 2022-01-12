
// LAYOUT
// header-navBar
import {} from './layouts/header/header-navBar.js'
// sub section
import {} from './layouts/header/vehicles-section.js'
import {} from './layouts/header/discovers-section.js'
import {} from './layouts/header/search-section.js'
// footer
import{} from './layouts/footer/footer.js'
//backt-to-top
import{} from './layouts/back-top-top.js'
//menu-bar
import{} from './layouts/header/menu-bar.js'

// PAGES
// HOME
// carousel-overview
import {} from './pages/home/carousel-overview/carousel-overview.js'

// intro
import {} from './pages/home/intro/intro.js'

// carousel-our-vehicle
import {} from './pages/home/our-vehicles/carousel-our-vehicles.js'

// discover
import {} from './pages/home/discover/discover.js'

// VENDOR
// BOOTSTRAP
// carousel bootstrap control
import {
    hideOrShowCarouselControl
} from './vendor/bootstrap/bootstrap-carousel.js'
hideOrShowCarouselControl('#carouselOverview')
hideOrShowCarouselControl('#ourVehiclesCarousel')

