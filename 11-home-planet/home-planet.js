console.log(`%c ${new Date().toLocaleTimeString()} `, 'background: #222; color: #bada55')
gsap.config({
    nullTargetWarn: false
});
//****** EYES
const eyesTimeline = gsap.timeline({
    repeat: -1
})
const eyeBalls = document.querySelectorAll("path#ball, path#ball_2, path#ball_3, path#ball_4, path#ball_5, path#ball_6")

eyesTimeline
    .set(eyeBalls, {y: 0})
    .to(eyeBalls, {y: 7, duration: 0.25, delay: 2, stagger: 0.25})
    .to(eyeBalls, {y: 0, duration: 0.25, delay: 4})
//****** HAT
const hat = document.querySelector("g#hat")

const hatTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 4
})
hatTimeline
    .set(hat, {y: 0})
    .to(hat, {y: -50, rotation: -10, duration: 0.25, delay: 1})
    .to(hat, {y: 0, rotation: 0, duration: 0.5, delay: 0.1})
//****** LEFT ARM
const leftArm = document.querySelector("#left-arm")

const leftArmTimeline = gsap.timeline({
    repeat: -1
})
leftArmTimeline
    .set(leftArm, {rotation: 0})
    .to(leftArm, {rotation: 20, duration: 0.25, delay: 2})
    .to(leftArm, {rotation: 0, duration: 0.25, delay: 2})
//****** RIGHT ARM
const rightArm = document.querySelector("#right-arm")

const rightArmTimeline = gsap.timeline({
    repeat: -1
})
leftArmTimeline
    .set(rightArm, {rotation: 0})
    .to(rightArm, {rotation: 20, duration: 0.25, delay: 3})
    .to(rightArm, {rotation: 0, duration: 0.25, delay: 2})
// ************************
// ------ TVlight ---------
// ************************
const tvLight = document.querySelector("#tv-light") // этот элемент над всем в доме + бэкграунд чёрный

const tvTimeline = gsap.timeline({
    repeat: -1
})


let opct = 0.75
tvTimeline
    .set(tvLight, {opacity: opct})
    .to(tvLight, {opacity: 1, duration: 1, delay: 0.25})
    .to(tvLight, {opacity: opct})
    .to(tvLight, {opacity: 1, duration: 0.4, delay: 0.25})
    .to(tvLight, {opacity: opct})

const label = document.querySelector("div.label")
const links = document.querySelectorAll("svg a")// get NodeList(2) [a#tv-cabinet, a#shelves]



