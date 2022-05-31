console.log(
    `%c ${new Date().toLocaleTimeString()}`,
    'background: #222; color: #bada55; font-size: 12px; display: inline-block; padding: 5px 16px '
);
//***********************************************************

const mainTag = document.querySelector("main")
const bodyTag = document.querySelector("body")
const figcaptionTags = document.querySelectorAll('figcaption')
const cursorTag = document.querySelector("div.cursor")
const cursorOuterTag = document.querySelector("div.cursor-outer")

const mq = window.matchMedia("(prefers-reduced-motion: no-preference) and (min-width: 600px)")

const runScripts = function () {
    if (mq.matches) {
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

            currentScroll = currentScroll + (aimScroll - currentScroll) * 0.05
            // плавная прокрутка - smooth scroll
            // плавность достигается частым вызовом функции
            mainTag.style.top = (-1 * currentScroll) + "px"
            requestAnimationFrame(changeScroll)
        }
        window.addEventListener("scroll", function () {
            aimScroll = window.scrollY

        })

        changeScroll()

//    **** CURSOR ****
        let cursorCurrentX = 0
        let cursorCurrentY = 0
        let cursorOuterCurrentX = 0
        let cursorOuterCurrentY = 0

        let cursorAimX = 0
        let cursorAimY = 0

        const changeCursor = () => {
            cursorCurrentX = cursorCurrentX + (cursorAimX - cursorCurrentX) * 0.1
            cursorCurrentY = cursorCurrentY + (cursorAimY - cursorCurrentY) * 0.1

            cursorTag.style.top = cursorCurrentY + 'px'
            cursorTag.style.left = cursorCurrentX + 'px'

            cursorOuterCurrentX = cursorOuterCurrentX + (cursorAimX - cursorOuterCurrentX) * 0.05
            cursorOuterCurrentY = cursorOuterCurrentY + (cursorAimY - cursorOuterCurrentY) * 0.05

            cursorOuterTag.style.top = cursorOuterCurrentY + 'px'
            cursorOuterTag.style.left = cursorOuterCurrentX + 'px'

            requestAnimationFrame(changeCursor)
        }

        document.addEventListener("mousemove", function (event) {
            cursorAimX = event.pageX
            cursorAimY = event.pageY
        })
        changeCursor()
    }
}

//    **** HOVER EFFECT ****
const linksTag = document.querySelectorAll("nav a")
linksTag.forEach(link => {
    link.addEventListener("mouseleave", function () {
        // add class
        link.classList.add("animate-out")
        // remove class
        setTimeout(() => {
            link.classList.remove("animate-out")
        }, 300)
    })
})

runScripts()
