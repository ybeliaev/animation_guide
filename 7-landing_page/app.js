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
    { color: "rgba(255,255,255, 0.4" },
    { color: "rgba(255,255,255, 1", stagger: 1 } //stagger задаёт задержку применения анимации к каждому элементу поочерёдно
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
tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");

tlSplit.fromTo(
    ".product-text-left",
    { x: 50, opacity: 0 },
    { opacity: 1, x: 0 },
    "<"
);
tlSplit.fromTo(
    ".product-text-right",
    { x: -50, opacity: 0 },
    { opacity: 1, x: 0 },
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