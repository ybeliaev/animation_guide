console.log(new Date().toLocaleTimeString())

// EYES
const eyesTimeline = gsap.timeline({
    repeat: -1
})
const eyeBalls = document.querySelectorAll("path#ball, path#ball_2, path#ball_3, path#ball_4, path#ball_5, path#ball_6")

eyesTimeline
    .set(eyeBalls, {y: 0})
    .to(eyeBalls, {y: 7, duration: 0.25, delay: 2, stagger: 0.25})
    .to(eyeBalls, {y: 0, duration: 0.25, delay: 4})
