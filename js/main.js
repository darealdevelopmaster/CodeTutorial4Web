const pageSections = document.querySelectorAll('section');


$("header nav .burger").click(() => {
    $("header nav .burger div").toggleClass("close-animation");
    $("header nav > ul").toggleClass('slide');
    $("header nav > ul > ul li ").toggleClass('show');
    $("header").toggleClass('nav-header-animation');

});

$("a[href^='#']").click((e)=>{
    let hrefVal = $(e.target).attr('href');
    let sectionsOffset = $(hrefVal).offset().top;
    $("body,html").animate({scrollTop: sectionsOffset} , 1500)
         
});

for(let index = 0; index < pageSections.length; index++) {
    window.addEventListener("scroll", () => {
        const rect = pageSections[index].getClientRects()[0];
        if (rect.top <= 0 + 200 && rect.bottom >= 200) {
          pageSections[index].classList.add("active");
        } else {
          pageSections[index].classList.remove("active");
        }

        if($(window).scrollTop() > $('#about').offset().top) {
            $("header").addClass('change-bg');
        }else {
            $("header").removeClass('change-bg');
        }
      });
    
}

$("header nav ul ul li").click(() => {

    $("header nav .burger div").removeClass("close-animation");
    $("header nav > ul").removeClass('slide');
    $("header nav > ul").removeClass(`theme${getRandomInt()}`);
    $("header").removeClass('nav-header-animation');
    $("header nav > ul > ul li ").removeClass('show');

});


// setTimeout(getRandomInt, 100)
// setTimeout(changeGradientBg, 10000)

// function changeGradientBg(){
//     $('body').toggleClass(`theme-gradient${getRandomInt()}`)
//     setTimeout(changeGradientBg, 10000)
// }

// ========================= PARALLAX =========================

let {mousePositionX, mousePositionY} = 0;
const parallaxElements = document.querySelectorAll('.parallax');
function update(mousePosition) {
    parallaxElements.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation ;
        let rotateDegree = (mousePositionX / (window.innerWidth / 2)) * 20;
        let isInLeft = parseFloat(getComputedStyle(el).left)<window.innerWidth / 2 ? 5 : -1 
        let mousePositionz = (mousePosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        el.style.transform = `          
        translateX(calc(-50% + ${- mousePositionX * speedx}px))
        translateY(calc(-50% + ${- mousePositionY * speedy}px))
        perspective(2500px) translateZ(${mousePositionz * speedz}px)
        rotateY(${rotateDegree * rotateSpeed}deg)`;      
    })
} 

window.addEventListener("mousemove" , (e)=> {
    mousePositionX = e.clientX - innerWidth / 2;
    mousePositionY = e.clientY - innerHeight / 2;
    update(e.clientX);
})



