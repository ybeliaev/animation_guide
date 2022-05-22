console.log(
    `%c ${new Date().toLocaleTimeString()}`,
    'background: #222; color: #bada55; font-size: 12px; display: inline-block; padding: 5px 16px '
);

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    (entries) => {
        console.log(entries); // object with methods: time, rootBounds ... etc
        entries.forEach((entry) => {
            // делаем что-либо для каждого переданного элемента
            if (entry.intersectionRatio > 0.1) {
                //intersectionRatio -  на сколько процентов наблюдаемый элемент пересекает наблюдаемую область(находится в ней 0.1 = 10%).
                entry.target.classList.add('in-view'); // entry.target - отслеживаемый элемент
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    },
    {threshold: [0.0, 0.1, 1.0]}
    //функция срабатывает при: 1) первый пиксель элемента попадает в область наблюдения, либо последний пиксель выходит из области наблюдения 2) 10% элемента внутри области наблюдения (напоминаю, что направление не имеет значения) 3) и когда элемент полностью в области наблюдения.
);
sections.forEach((section) => {
    // запускаем "слежку" за элементом(ами) в константе target (у меня это section)
    observer.observe(section);
    //section -  section.alternative for first element
    // make transform for img
    const divTag = section.querySelector('div');
    document.addEventListener('mousemove', function (event) {
        const aimX = (event.pageX - window.innerWidth / 2) / 50;
        const aimY = (event.pageY - window.innerWidth / 2) / -50;
        divTag.style.transform = `rotateX(${aimY}deg) rotateY(${aimX}deg)`;
    });
});
