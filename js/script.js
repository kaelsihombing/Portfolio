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
const spans = document.querySelectorAll('h1 span')

spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

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
    .fromTo([bar2, bar3, bar11], 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(80% - 6px)`, ease: Power4.easeOut })
    .fromTo([bar4, bar7, bar8], 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(45% - 6px)`, ease: Power4.easeOut })
    .fromTo(bar5, 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(70% - 6px)`, ease: Power4.easeOut })
    .fromTo(bar9, 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(60% - 6px)`, ease: Power4.easeOut })
    .fromTo(bar10, 0.5,
        { width: `calc(0% - 6px)` },
        { width: `calc(30% - 6px)`, ease: Power4.easeOut })

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
    triggerElement: '#skills',
    triggerHook: 0,
    offset: -20
})
    .setTween(t1)
    .addTo(controller);


var t5 = new TimelineLite();

t5
    .from(".work-hero", .9, { y: 50, opacity: 0 })

const scene5 = new ScrollMagic.Scene({
    triggerElement: "#work"
})
    .setTween(t5)
    .addTo(controller);

function showWorks(event) {
    const getId = event.id
    // console.log(getId);
    const links = document.querySelectorAll('.list button')
    // console.log(links);
    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')

    const getCategory = document.querySelector(`.experience-${getId}`)
    console.log(getCategory);
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
    .from(".profile-image", .5, { y: 50, opacity: 0 })

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
    .from(".title h1", .6, { x: 100, opacity: 0 })
    .from(".main div p", .6, { x: -30, opacity: 0, color: "#56d8c4" })

const scene4 = new ScrollMagic.Scene({
    triggerElement: "#skills"
})
    .setTween(t4)
    .addTo(controller);
