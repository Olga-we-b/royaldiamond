window.addEventListener('scroll', function(){
    const parallax = document.querySelector('.parallax');
    let scrollposition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollposition * .9 + 'px)';



} )