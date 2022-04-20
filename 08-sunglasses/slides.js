const slides = document.querySelectorAll('section div.slides')

slides.forEach(slide => {
    let current = 0
    let z = 100
    console.log('slide: ', slide)

    const images = slide.querySelectorAll('img')
    images.forEach(image => {
        z = z - 1
        image.style.zIndex = z
    })
    // след строка и imagesLoaded установят фото в рандомное начальное положение при загрузке страницы
    gsap.set(images, {opacity: 0})


    imagesLoaded(images, function () {
        const timeline = gsap.timeline()

        timeline
            .set(images, {
                x: () => {
                    return 500 * Math.random() - 250
                },
                y: "500%",// фоточки будут валить снизу
                rotation: () => {
                    return 90 * Math.random() - 45
                },
                opacity: 1
            })
            .to(images, {x: 0, y: 0, stagger: -0.25})
            .to(images, {
                rotation: () => {
                    return 16 * Math.random() - 8
                }
            })
    })
    slide.addEventListener('click', () => {
        z = z - 1
        let direction = '150%'
        let midAngle = 15
        if (Math.random() > 0.5) {
            direction = "-150%"
            midAngle = -15
        }

        const currentImage = images[current]
        const flipTimeline = gsap.timeline()
        flipTimeline
            .fromTo(currentImage, {x: 0}, {
                x: direction, rotation: midAngle, rotationY: 75,
                scale: 1.1
            })
            .fromTo(currentImage, {zIndex: z}, {
                x: 0, rotation: () => 16 * Math.random() - 8, rotationY: 0,
                scale: 1
            })

        current = current + 1
        current = current % images.length
    })
})