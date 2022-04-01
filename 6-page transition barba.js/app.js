const tlLeave = gsap.timeline({
    default: {duration: 0.75, ease: "Power2.easeOut"}
})
const tlEnter = gsap.timeline({
    default: {duration: 0.75, ease: "Power2.easeOut"}
})

//++++++++Make the functions for the leave and enter animations+++++++
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
const enterAnimation = (current, done, gradient) => {
    const product = current.querySelector(".image-container");
    const text = current.querySelector(".showcase-text");
    const circles = current.querySelectorAll(".circle");
    const arrow = current.querySelector(".showcase-arrow");
    return (
        tlEnter.fromTo(
            arrow,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, onComplete: done }
        ),
            tlEnter.to("body", { background: gradient }, "<"),
            tlEnter.fromTo(product, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, "<"),
            tlEnter.fromTo(text, { y: 100, opacity: 0 }, { opacity: 1, y: 0 }, "<"),
            tlEnter.fromTo(
                circles,
                { y: -200, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                    duration: 1,
                },
                "<"
            )
    );
};
// RUN ANIMATION
barba.init({
    transitions: [{
        name: 'default',
        leave(data) {
            // create your stunning leave animation here
            console.log(data)
            // data:
            // current: {container: section.showcase, html: '<html lang="en"><head>\n    <meta charset="UTF-8">\n…   \x3Cscript src="./app.js">\x3C/script></body></html>', namespace: 'handbag', url: {…}}
            // next: {container: section.showcase, html: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <met…cript src="./app.js">\x3C/script>\n  </body>\n</html>\n', namespace: 'boot', url: {…}}
            // trigger: a
            let current = data.current.container
            console.log(current)
        },
        enter() {
            // create your amazing enter animation here
            let next = data.next.container
        }
    }]
})