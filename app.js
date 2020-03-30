let containers = document.querySelectorAll('.container')
const options ={
    root:null,
    rootMargin:"30px ",
    threshold:1.0
}





const handler = (myelment,observer)=>{
    myelment.forEach(isElemt =>{
        console.log(isElemt.intersectionRatio)
        if(isElemt.intersectionRatio>=1){
           addClassList(isElemt.target)
        }
         else if(isElemt.intersectionRatio< 1 || isElemt.target.tagName==="heart"){
           removeClassList(isElemt.target)
        }
    })
}

const addClassList =(el)=>{
  el.classList.add('bounce')
}
const removeClassList = (el)=>{
el.classList.remove('bounce')
}



let observer = new IntersectionObserver(handler,options)
containers.forEach(el =>{
    observer.observe(el)
})




/* const element = document.querySelector('.clubs')
let elementHeight = element.clientHeight;

let height= element.offsetHeight



const isView=()=>{
    let windowHeight=window.innerHeight
    let scrollY=window.scrollY || window.pageYOffse
    let scrollPosition = scrollY + windowHeight;
    let elPosition =element.getBoundingClientRect().top + scrollY + elementHeight

     if (scrollPosition > elPosition) {
        return true;
      }
      
      return false;
    }
 




const animate =()=>{
   if(isView()){
    element.classList.add('bounceInRight')
   }else{
    element.classList.remove('bounceInRight')
   } 
}
document.addEventListener('scroll', animate) */
