const hambuger = document.querySelector('.icon')
const navigate = document.querySelector('.haspc >nav')

hambuger.onclick =()=>{
    if(navigate.style.display == 'block'){
        navigate.style.display = 'none'
        hambuger.src = 'bx-menu.svg'
    }else{
        navigate.style.display = 'block'
        hambuger.src = 'icon-close.svg'
    }
}