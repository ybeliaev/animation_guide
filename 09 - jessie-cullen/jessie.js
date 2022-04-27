console.log("It's work!")

const headerTag = document.querySelector("header")
const arrowTag = document.querySelector("img.arrow")
// NodeList(4) [g.blob, g.blob, g.blob, g.blob]
const blobGroups = document.querySelectorAll("g.blob")
const sectionTags = document.querySelectorAll("section")

const fadeHeader = () => {
    console.log(window.scrollY) // при 250 фото снизу уже наезжает на заголовок
    let pixelsY = window.scrollY
    headerTag.style.opacity = 1 - (pixelsY / 500)

}
const fadeArrow = () => {
    let pixelsY = window.scrollY
    arrowTag.style.opacity = 1 - pixelsY / 250
}

const checkBlobs = () => {
    let pixelsY = window.scrollY
    blobGroups.forEach((blob, idx) => {
        const currentSection = sectionTags[idx]
        if (pixelsY > currentSection.offsetTop - 300) {
            blob.classList.add("in-view")
        } else {
            blob.classList.remove("in-view")
        }
    })

}

window.addEventListener("scroll", () => {
    fadeHeader()
    fadeArrow()
    checkBlobs()
})