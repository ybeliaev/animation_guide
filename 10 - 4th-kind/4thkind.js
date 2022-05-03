const darkModeToggle = document.querySelector("a.dark-mode-toggle")
const darkModeToggleText = darkModeToggle.querySelector("span")

const menuToggle = document.querySelector("a.menu-toggle")
const menuToggleText = menuToggle.querySelector("span")


const bodyTag = document.querySelector("body")
// гоняется шарик из угла в угол(шарика ТРИ)
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

})
console.log(darkModeToggle)
console.log(bodyTag)