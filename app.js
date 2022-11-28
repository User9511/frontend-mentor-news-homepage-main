const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.getElementById('header')
  
    burger.addEventListener('click',()=>{
    // Toggle Nav
    header.classList.toggle('is-active');
    nav.classList.toggle('nav-active');
 

     //  Animate Links
    navLinks.forEach((link, index)=>{
            if(link.style.animation){
            link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .5}s`
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle')
     });
}

navSlide()
