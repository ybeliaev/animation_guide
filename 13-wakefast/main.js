console.log(
    `%c ${new Date().toLocaleTimeString()}`,
    'background: #222; color: #bada55; font-size: 12px; display: inline-block; padding: 5px 16px '
);
//***********************************************************

const mainTag = document.querySelector("main")
mainTag.style.position = 'fixed'
mainTag.style.left = '0px'
mainTag.style.top = '0px'
mainTag.style.width = '100%'

let currentScroll = 0

const changeScroll = function () {
    currentScroll = currentScroll + 1
    mainTag.style.top = (-1 * currentScroll) + "px"
    requestAnimationFrame(changeScroll)
}
// changeScroll()