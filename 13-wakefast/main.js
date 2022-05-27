console.log(
    `%c ${new Date().toLocaleTimeString()}`,
    'background: #222; color: #bada55; font-size: 12px; display: inline-block; padding: 5px 16px '
);
//***********************************************************

const mainTag = document.querySelector("main")
const bodyTag = document.querySelector("body")
const figcaptionTags = document.querySelectorAll('figcaption')
const cursorTag = document.querySelector("div.cursor")

const motion = window.matchMedia("(prefers-reduced-motion: no-preference)")
const large = window.matchMedia('(min-width: 600px)')

if (motion.matches && large.matches) {
    mainTag.style.position = 'fixed'
    mainTag.style.left = '0px'
    mainTag.style.top = '0px'
    mainTag.style.width = '100%'

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry.target)
            if (entry.intersectionRatio > 0.25) { // число пересечения target элемента
                entry.target.classList.add('in-view')
            } else {
                entry.target.classList.remove("in-view")
            }
        })
    }, {
        threshold: [0, 0.25, 1]
    })
    figcaptionTags.forEach(caption => {
        observer.observe(caption);
    })

    let currentScroll = 0
    let aimScroll = 0

    const changeScroll = function () {
        bodyTag.style.height = mainTag.offsetHeight + 'px'

        currentScroll = currentScroll + (aimScroll - currentScroll) * 0.05 // плавная прокрутка - smooth scroll
// плавность достигается частым вызовом функции
        mainTag.style.top = (-1 * currentScroll) + "px"
        requestAnimationFrame(changeScroll)
    }
    window.addEventListener("scroll", function () {
        aimScroll = window.scrollY

    })

    changeScroll()

//    **** CURSOR ****
    document.addEventListener("mousemove", function (event) {
        cursorTag.style.left = event.pageX + "px"
        cursorTag.style.top = event.pageY + "px"
    })
}



