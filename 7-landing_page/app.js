//Pin the FIRST page
const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-page",
        start: '0%', // когда старт
        end: '100%',
        pin: true, // закрепить триггерный элемент, пока он активен
        markers: true
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
    { color: "rgba(255,255,255, 0.4" },
    { color: "rgba(255,255,255, 1", stagger: 1 }
);
// возврат к первоначальному цвету
const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        markers: { startColor: "pink", endColor: "pink" },
        scrub: true,
        start: "-20%",
        end: "60%",
    }
})
tlHRemove.to(".highlight", { color: "rgba(255,255,255, 0.4", stagger: 1 });