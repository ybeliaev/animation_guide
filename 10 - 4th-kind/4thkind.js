// +++++++ DARK MODE content ++++++
const darkModeToggle = document.querySelector("a.dark-mode-toggle")
const darkModeToggleText = darkModeToggle.querySelector("span")

// ++++++ MENU content ++++++
const menuToggle = document.querySelector("a.menu-toggle")
const menuToggleText = menuToggle.querySelector("span")

// +++++++ DARK MODE ++++++
const bodyTag = document.querySelector("body")
// гоняется шарик из угла в угол(всего ТРИ шарика )
darkModeToggle.addEventListener('click', function () {
    if (bodyTag.classList.contains("dark-mode")) {
        darkModeToggleText.innerHTML = "Light mode"
        gsap.to("g.toggle", {x: 43})
    } else {
        darkModeToggleText.innerHTML = "Dark mode"
        gsap.to("g.toggle", {x: 19})
    }
    const timeline = gsap.timeline()
    timeline
        .set("div.wipe", {height: "0%", top: "0%"})
        .to("div.wipe", {height: "100%", duration: 2})
        .add(function () {
            bodyTag.classList.toggle('dark-mode')
        })
        .to("div.wipe", {height: "0%", top: "100%"})
})
// ++++++ MENU ++++++
menuToggle.addEventListener("click", () => {
    bodyTag.classList.toggle("nav-open")
    if (bodyTag.classList.contains("nav-open")) {
        menuToggleText.innerHTML = "Close"

        gsap.to(".burger-top", {rotation: 45, transformOrigin: "50% 50%", y: 8})
        gsap.to(".burger-bottom", {rotation: -45, transformOrigin: "50% 50%", y: -8})
        gsap.to(".burger-mid", {opacity: 0})
    } else {
        menuToggleText.innerHTML = "Menu"

        gsap.to(".burger-top", {rotation: 0, y: 0})
        gsap.to(".burger-bottom", {rotation: 0, y: 0})
        gsap.to(".burger-mid", {opacity: 1})
    }
})