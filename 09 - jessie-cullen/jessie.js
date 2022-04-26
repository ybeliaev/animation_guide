console.log("It's work!")

const headerTag = document.querySelector("header")

const fadeHeader = () => {
    console.log(window.scrollY) // при 250 фото снизу уже наезжает на заголовок
    let pixelsY = window.scrollY
    headerTag.style.opacity = 1 - (pixelsY / 250)

}

window.addEventListener("scroll", fadeHeader)