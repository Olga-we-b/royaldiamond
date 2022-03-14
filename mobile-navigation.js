const menuIcon = document.querySelector('.menu-icon');
const mobileMenuImage = document.querySelector('.menu-icon img:first-child');
const mobileMenuImageClose = document.querySelector('.menu-icon img:last-child');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const mobileMenu = document.querySelector('.mobile-menu');


menuIcon.addEventListener('click', () =>{
    if (mobileMenuWrapper.style.display === "none"){
        mobileMenuWrapper.style.display = "block";
        mobileMenu.style.transform = "translateX(0)";
        mobileMenuImageClose.style.opacity = '1';
        mobileMenuImage.style.opacity = '0';
        document.body.style.height = '100vh';
        document.body.style.overflowY = 'hidden';
    } else {
        mobileMenuWrapper.style.display = "none";
        mobileMenuImage.style.opacity = '1';
        mobileMenuImageClose.style.opacity = '0';
        document.body.style.height = '100%';
        document.body.style.overflowY = 'visible';




    } 


})
console.log(window.innerWidth)
