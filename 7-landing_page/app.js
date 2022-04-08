//Pin the FIRST page
const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-page",
        start: '0%', // когда старт
        end: '100%',
        pin: true, // закрепить триггерный элемент, пока он активен
        markers: true,
        pinSpacing: false // следующий элемент наезжает на этот в заданном диапазоне
    }
})

// TWO PAGE highlight
const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        markers: {startColor: "blue", endColor: "blue"},
        scrub: 1,
        start: "-40%",
        end: "40%",
    }
})
tlH.fromTo(
    ".highlight",
    {color: "rgba(255,255,255, 0.4"},
    {color: "rgba(255,255,255, 1", stagger: 1} //stagger задаёт задержку применения анимации к каждому элементу поочерёдно
);
// возврат к первоначальному цвету
const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        markers: {startColor: "pink", endColor: "pink"},
        scrub: true,
        start: "-20%",
        end: "60%",
    }
})
tlHRemove.to(".highlight", {color: "rgba(255,255,255, 0.4", stagger: 1});

// PAGE THREE

const tlSplit = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "-25%",
        end: "30%",
        markers: true,
        scrub: true,
    },
});
tlSplit.fromTo(".large-phone", {x: "40%"}, {x: "20%"});
tlSplit.fromTo(".small-phone", {x: "-40%"}, {x: "-20%"}, "<");

tlSplit.fromTo(
    ".product-text-left",
    {x: 50, opacity: 0.2},
    {opacity: 1, x: 0},
    "<"
);
tlSplit.fromTo(
    ".product-text-right",
    {x: -50, opacity: 0.2},
    {opacity: 1, x: 0},
    "<"
);

const tlSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        pin: true,
        pinSpacing: false,
        start: "0%",
        end: "100%",
    },
});
// CAROUSEL
const swatches = document.querySelectorAll(".swatches img");
//gallery - left container with images
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue"; // first img
let topIndex = 2;

swatches.forEach((swatch, index)=>{
    const coord = slides[index].getBoundingClientRect().left;
    swatch.addEventListener('click', e =>{
        let swatchName = e.target.getAttribute("swatch");
        let closeUp = document.querySelector('.' + swatchName)
        // check if I'm on same swatch
        if(currentSwatch ===swatchName) return
        // create class with Z-index prop for right section img
        gsap.set(closeUp, {zIndex: topIndex})
        gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });
        console.log('coord ',coord )
        //Gallery
        gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });
        //Increment zIndex
        topIndex++;
        currentSwatch = swatchName; // потому что на 1-й элемент не вернёшся иначе, т.к сработает if(currentSwatch ===swatchName) return
        
        
        
    })
})
