var oldScroll = 0;
window.addEventListener('scroll', function (event) {
    console.log(oldScroll);
    oldScroll = window.scrollY;
});