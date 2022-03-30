const tlLeave = gsap.timeline({
    default: {duration: 0.75, ease: "Power2.easeOut"}
})
const tlLeave = gsap.timeline({
    default: {duration: 0.75, ease: "Power2.easeOut"}
})

//Make the functions for the leave and enter animations
const leaveAnimation = (current, done) => {
    const product = current.querySelector(".image-container");
    const text = current.querySelector(".showcase-text");
    const circles = current.querySelectorAll(".circle");
    const arrow = current.querySelector(".showcase-arrow");

    return (
        tlLeave.fromTo(
            arrow,
            {opacity: 1, y: 0},
            {opacity: 0, y: 50, onComplite: done}
        ),
            tlLeave.fromTo(product, { y: 0, opacity: 1 }, { y: 100, opacity: 0 }, "<"),
            tlLeave.fromTo(text, { y: 0, opacity: 1 }, { y: 100, opacity: 0 }, "<"),
            tlLeave.fromTo(
                circles,
                { y: 0, opacity: 1 },
                { y: -200,
                    opacity: 0,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                    duration: 1},
                "<"
            )

    )
}