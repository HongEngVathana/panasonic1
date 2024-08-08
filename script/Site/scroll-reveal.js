// scroll-reveal.js

document.addEventListener("DOMContentLoaded", function () {

    //cloud page
    ScrollReveal().reveal('.text_section', {
        delay: 600,
        distance: '50px',
        origin: 'top',
    });
    ScrollReveal().reveal('.banner_section_img', {
        delay: 650,
        distance: '50px',
        origin: 'bottom',
    });

    ScrollReveal().reveal('.Picture', {
        delay: 600,
        distance: '50px',
        origin: 'bottom',
    });
    ScrollReveal().reveal('.img-box', {
        delay: 600,
        distance: '50px',
        origin: 'right',
    });
    ScrollReveal().reveal('.cloud-p', {
        delay: 600,
        distance: '50px',
        origin: 'left',
    });
    
    //allowx
    ScrollReveal().reveal('.point_text', {
        delay: 600,
        distance: '50px',
        origin: 'top',
    });
    
    //net2 page
    ScrollReveal().reveal('.heading_container', {
        delay: 600,
        distance: '50px',
        origin: 'top',
    });
    ScrollReveal().reveal('.box', {
        delay: 600,
        distance: '50px',
        origin: 'bottom',
    });



    //
    ScrollReveal().reveal('#main h2', {
        delay: 600,
        distance: '50px',
        origin: 'left',
    });

    ScrollReveal().reveal('.wsite-multicol-table img', {
        delay: 800,
        distance: '50px',
        origin: 'right',
        interval: 200,
    });

    ScrollReveal().reveal('.wsite-button', {
        delay: 1000,
        distance: '50px',
        origin: 'bottom',
        interval: 200,
    });

    ScrollReveal().reveal('#main img', {
        delay: 1200,
        distance: '50px',
        origin: 'top',
        interval: 200,
    });

    ScrollReveal().reveal('wsite-multicol-col','wsite-content-title' ,{
        delay: 600,
        distance: '50px',
        origin: 'left',
    });

    ScrollReveal().reveal('.wsite-section-elements', {
        delay: 1000,
        distance: '50px',
        origin: 'bottom',
        interval: 200,
    });
});
