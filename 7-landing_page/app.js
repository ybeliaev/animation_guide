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