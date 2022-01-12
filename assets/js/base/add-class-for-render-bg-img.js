// add class to render background-img for card img by SASS
function renderImg ($className){
    const listItems = document.querySelectorAll($className)
    const classNameAddition = $className.substr(1)
    listItems.forEach((item,index) => {
        item.classList.add(`${classNameAddition}--${index+1}`)
    })
}
export {renderImg}