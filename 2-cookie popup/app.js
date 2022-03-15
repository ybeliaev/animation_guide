const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}})

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5})
tl.fromTo('.cookie', {opacity:0, xPercent:-100, rotation: '-45deg'},{opacity:1, xPercent:0,rotation: '0deg'})
tl.fromTo('.text', {x:30, opacity:0},{x:0,opacity:1})