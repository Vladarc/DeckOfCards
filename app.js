const SELECTOR = '.container'
const ANIMATE_CLASS_NAME_RIGHT = ['visible', 'animated', 'bounceInRight']
const ANIMATE_CLASS_NAME_LEFT = ['visible', 'animated', 'bounceInLeft']

const options = {
  root: null,
  rootMargin: "30px ",
  threshold: 0.3
}

const handler = (myelment, observer) => {
  myelment.forEach(isElemt => {
    if (isElemt.intersectionRatio > 0) {
      addClassList(isElemt.target)
    }
  })
}

// open arr with classes elements 
const addingClass= (element,className) => {
  className.forEach(el =>{
    element.classList.add(el)
  })
}
// add class to target 
const addClassList = (el) => {
  const classNamesToRight =['spade','clubs'].some(clasName =>el.classList.contains(clasName))
  const classNamesToLeft=['heart','diamond'].some(clasName =>el.classList.contains(clasName))
  
  if (classNamesToRight) {
    addingClass(el,ANIMATE_CLASS_NAME_RIGHT)
  }
  else if(classNamesToLeft){
    addingClass(el,ANIMATE_CLASS_NAME_LEFT)
  }
}

let observer = new IntersectionObserver(handler, options)
document.querySelectorAll(SELECTOR).forEach(el => {
  observer.observe(el)
})





