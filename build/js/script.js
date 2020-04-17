// HIDE HEADER MENU
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {

    var currentScrollPos = window.pageYOffset;

    // if (prevScrollpos > currentScrollPos) {
    //     let navbar = document.getElementById("navbar")
    //     navbar.style.top = "0"
    // }

    if (prevScrollpos > 100) {

        if (currentScrollPos > this.prevScrollpos) {
            let navbar = document.getElementById("navbar")
            document.getElementById("navbar").style.top = "-90px";
        } else {
            let navbar = document.getElementById("navbar")
            navbar.style.top = "0"
        }
        let navbar = document.getElementById("navbar")
        navbar.style.transition = "1s"
        navbar.style.boxShadow = "0 0 1.4rem rgba(0, 0, 0, 0.500)";
    } else {
        let navbar = document.getElementById("navbar")
        navbar.style.boxShadow = "";
    }

    // if currentScroll
    prevScrollpos = currentScrollPos;
}



// EXPERIENCES TAB

var tab = document.getElementById("list")
var btns = tab.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



// ANIMATION
const spans = document.querySelectorAll(["h1 span", "a.social-media i"])

spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

// Skill bar

const bar1 = document.querySelector('.bar-1')
const bar2 = document.querySelector('.bar-2')
const bar3 = document.querySelector('.bar-3')
const bar4 = document.querySelector('.bar-4')
const bar5 = document.querySelector('.bar-5')
const bar6 = document.querySelector('.bar-6')
const bar7 = document.querySelector('.bar-7')
const bar8 = document.querySelector('.bar-8')
const bar9 = document.querySelector('.bar-9')
const bar10 = document.querySelector('.bar-10')
const bar11 = document.querySelector('.bar-11')
const bar12 = document.querySelector('.bar-12')

var t1 = new TimelineLite()

t1
    .from("#skills-left", .4, { x: -50, opacity: 0 })
    .from("#skills-right", .4, { x: 50, opacity: 0 })
    .from("#skills-center", .4, { y: 50, opacity: 0 })
    // .from([".tag-html", bar1, bar6, bar12], .6, { x: -30, opacity: 0 })
    .fromTo([bar1, bar6, bar12], 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(70% - 6px)`, ease: Power4.easeOut })
    .fromTo([bar2, bar3, bar11, bar8], 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(80% - 6px)`, ease: Power4.easeOut })
    .fromTo([bar4, bar7], 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(45% - 6px)`, ease: Power4.easeOut })
    .fromTo(bar5, 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(70% - 6px)`, ease: Power4.easeOut })
    .fromTo(bar9, 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(35% - 6px)`, ease: Power4.easeOut })
    .fromTo(bar10, 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(40% - 6px)`, ease: Power4.easeOut })

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
    triggerElement: '#skills',
    triggerHook: 0,
    offset: -150
})
    .setTween(t1)
    .addTo(controller);


var t5 = new TimelineLite();

t5
    .from(".work-section-title", .7, { y: 50, opacity: 0 })
    .from(".work-hero-title", .5, { y: 50, opacity: 0 })
    .from("#phm", .2, { x: -10, opacity: 0 })
    .from("#ep", .2, { x: -10, opacity: 0 })
    .from("#olimpiade", .2, { x: -10, opacity: 0 })
    .from("#sf", .2, { x: -10, opacity: 0 })
    .from("div[class^='experience-'] h3", .2, { y: 10, opacity: 0 }).from("p.date", .2, { y: 10, opacity: 0 })
    .from(".tab li:nth-child(1)", .2, { x: -10, opacity: 0 })
    .from(".tab li:nth-child(2)", .2, { x: -10, opacity: 0 })



const scene5 = new ScrollMagic.Scene({
    triggerElement: "#work"
})
    .setTween(t5)
    .addTo(controller);

function showWorks(event) {
    const getId = event.id
    console.log(getId);
    const links = document.querySelectorAll('.list button')
    // console.log(links);
    for (let i = 0; i < links.length; i++) {
        // console.log(links[i]);
        if (links[i].hasAttribute('class')) {
            // console.log(links[i]);
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')

    const getCategory = document.querySelector(`.experience-${getId}`)

    const categories = document.querySelectorAll('div[class ^= "experience-"]')
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showTab')
            categories[i].classList.add('hideTab')
        }
    }

    getCategory.classList.remove('hideTab')

    getCategory.classList.add('showTab')

}

// Category works

function showRequiredCategory(event) {
    const getId = event.id

    const links = document.querySelectorAll('.work-category button')
    console.log(links);
    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')

    const getCategory = document.querySelector(`.category-${getId}`)

    const categories = document.querySelectorAll('div[class ^= "category-"]')
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')

    getCategory.classList.add('showCategory')
}

// ABOUT

var t2 = new TimelineLite();

t2
    .from(".about-me-info", .9, { x: 30, opacity: 0 })
    .from(".about-1", .2, { x: -30, opacity: 0 })
    .from(".about-2", .2, { x: 30, opacity: 0 })
    .from(".about-3", .2, { x: -30, opacity: 0 })
    .from(".about-left img", .2, { y: 50, opacity: 0 })

const scrollScene = new ScrollMagic.Scene({
    triggerElement: '#about',
})
    .setTween(t2)
    .addTo(controller);


// MAIN
var t3 = new TimelineMax();

t3
    .from(".text h1", .7, { y: 50, opacity: 0 })
    .from(".text div", .4, { y: 50, opacity: 0 })


const scene3 = new ScrollMagic.Scene({
    triggerElement: ".text-left"
})
    .setTween(t3)
    .addTo(controller);

// SKILS



var t4 = new TimelineLite();

t4
    .from(".skills-section-title", .6, { x: 100, opacity: 0 })
    .from(".skills-main div p", .6, { x: -30, opacity: 0, color: "#56d8c4" })

const scene4 = new ScrollMagic.Scene({
    triggerElement: "#skills"
})
    .setTween(t4)
    .addTo(controller);


// Parallax Js
// var scene6 = document.getElementsByClassName("");
// console.log(scene6);
// var parallax = new Parallax(scene6);