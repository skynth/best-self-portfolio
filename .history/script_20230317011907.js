$(document).ready(function(){
    $(window).scroll(function () {
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
            $('.dropdown').addClass('sticky');

        }
        else{
            $('.navbar').removeClass('sticky');
            $('.dropdown').removeClass('sticky');


        }
    });

    //Script to toggle menu and navbar
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    })
    $('.navbar .menu li a').click(function() {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");

    })
        //Typing Script

        var typed = new Typed(".typing", {
            strings: ["Hi Tim and MC!", "I love leadership theory!", "I hope you like my website!", "Are you still reading?", "Don't forget about the blog posts!"],
            typeSpeed: 140,
            backSpeed: 100,
            loop: true
        });
});