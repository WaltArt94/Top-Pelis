document.querySelector(".menu-btn").addEventListener("click",() =>{
    document.querySelector(".nav-menu").classList.toggle("show");
});


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay: 1000 });
ScrollReveal().reveal('.banner',{delay: 500 });
ScrollReveal().reveal('.social',{delay: 500 });