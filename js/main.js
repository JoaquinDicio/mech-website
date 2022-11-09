function init(){
   setEvents();
}
function setEvents(){
    const $button=document.querySelector('#menu-btn')
    window.addEventListener('scroll',()=>toggleNavbarBg())
    $button.addEventListener('click',()=>showMenu())
}
function toggleNavbarBg(){
    const $header=document.querySelector('#header')
    if (window.scrollY<=200){
        $header.style.backgroundColor='transparent'
    }else{
        $header.style.backgroundColor='#1E1E1E'
    }
}
function showMenu(){
    const $menu=document.querySelector('#nav-ul')
    $menu.classList.toggle('d-none')
}