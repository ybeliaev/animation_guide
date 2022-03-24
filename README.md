# 🔥 Animation_guide 🔥

* https://svg-art.ru/
* https://css-tricks.com/svg-line-animation-works/

### 💡 Свойство `transition` указывать как свойство элемента НАД которым совершаю действие
* имя свойства | длительность | временная функция | задержка 
* `transition: margin-left 4s ease-in-out 1s;`
*
* Применить к 2 свойствам 
* `transition: margin-left 4s, color 1s;`

### bezier function 🔗 https://cubic-bezier.com/

### Work with SVG in Figma
![cookie svg](https://github.com/ybeliaev/animation_guide/blob/master/src/img/figma_cookie.png) 
  > тогда в `id` будут названия групп ,которые дал(по-умолчанию они `group`)

## 💡 GSAP
* `yoyo: true, repeat: -1 `
  > `yoyo: true` Gets or sets the timeline's `yoyo` state, where `true` causes the `timeline` to go back and forth, alternating backward and forward on each repeat.
  >if `repeat` is `1`, the `timeline will` play a total of twice (the initial play plus 1 repeat). To repeat INDEFINITELY, use `-1`.
* `tl.fromTo('.text', {x:30, opacity:0},{x:0,opacity:1}, '<')`
  > `<` - эта анимация ОДНОВРЕМЕННО с предидущей
  > если `<50%`  -  50% задержки 
* чтобы части svg были видны за пределами элемента при их захожднии за пределы фигуры
  > необходимо, но НЕДОСТАТОЧНО `overflow: visible; `
  > ещё нужно удалить `<clipPath id="clip0_1_4"><rect width="98" height="98" fill="white"/></clipPath>` из тела `svg`
* `{ y: 0, opacity:1 ,delay: 2, stagger: 0.1, ease: "back.out(3)" }`
  > `stagger` задаёт задержку применения анимации к каждому элементу поочерёдно
* 🔥 `span` - inline элемент поэтому не будет реагировать на `transform: translate()`
  > решение  `gsap.set(".letter", { display: "inline-block" });`
### GSAP example 
* `const tl = gsap.timeline({ default:{duration: 0.35, ease: "Power2.easeOut"}})`
* добавил в `addEventListener` на click `gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.9})`
  >  жизнь `.home-svg`:
  > 1. имеет размер  `scale: 1`
  > 2. на клик он за `0.35s` получает `scale: 0.9` и остаётся в нём
  > 3. повторный клик возвращает на `scale: 1` с последующим `scale: 0.9`
* добавление `yoyo: true, repeat: 1` исправляет проблему
  > `gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 })`

### 💡 `rotate()` in GSAP is `rotation`

### GSAP example
*    `tl.fromTo(".messages-svg", { scale: 1 }, { scale: 0.9 });` - объект "замёрз" на `scale: 0.9`
*    `tl.fromTo(".flap", { scale: 1 }, { scale: -1 }, "<50%");` - что-то ещё
*    `tl.fromTo(".messages-svg", { scale: 0.9 }, { scale: 1 }, "<50%");` - объект вернул на `scale: 1`

### GSAP example
#### работа с двумя заголовками

```js
const carousels = document.querySelectorAll('h1, h2')
const fadeInTimeline = gsap.timeline()

fadeInTimeline
        .set(carousels, {opacity: 0})
        .to(carousels, {opacity: 1, delay: 1, stagger: 1, duration: 3})


```
* абзацы будут поочерёдно (за это отвечает `stagger: 1`) появляться

#### бегущая сторока

```js
const carousels = document.querySelectorAll("header h1, header h2")

const fadeInTimeline = gsap.timeline()

carousels.forEach(carousel => {
  const spanTag = carousel.querySelector("span")
  const spanWidth = spanTag.clientWidth
  
  for (let i = 0; i < 20; i = i + 1) {
    carousel.appendChild(spanTag.cloneNode(true))
  }
  
  const movementTimeline = gsap.timeline({
    repeat: -1
  })

  movementTimeline
    .set(carousel, { x: 0 })
    .to(carousel, { x: spanWidth * -1, duration: 6, ease: "linear" })
})

```
> ширина заголовков разная, поэтому скорость движения разная (за скорость анимации отвечает `duration`)
> https://codepen.io/jorgenb/pen/QWaKzZG

#### Дёргающаяся прямая линия SVG
* нужно в фигме скопировать дефолтное состояние фигуры
* поставить точку на линии, протянуть "усики" точки
* поднять или опустить точку линии и скопировать это состояние SVG
* взять значения d="M0 0.999512C0..." дефолтное и изменённое
```js
// svg
const line = container.querySelector(".elastic-line");
// проверка на наполненность поля input
if (!input.value) {
  tl.fromTo(
          line,
          { attr: { d: start } },
          { attr: { d: end }, ease: "Power2.easeOut", duration: 0.75 }
  );
  tl.to(line, { attr: { d: start }, ease: "elastic.out(3,0.5)" }, "<50%");
```
### 💡 GSAP Функции в свойствах
```js
imagesLoaded(images, function () {
    const timeline = gsap.timeline()
  
    timeline
      .set(images, {
        x: () => {
          return 500 * Math.random() - 250
        },
        y: "500%",
        rotation: () => {
          return 90 * Math.random() - 45
        },
        opacity: 1
      })
      .to(images, { x: 0, y: 0, stagger: -0.25 })
      .to(images, { 
        rotation: () => {
          return 16 * Math.random() - 8
        } 
      })
  })
``` 
### SVGGeometryElement.getTotalLength()
> The SVGGeometryElement.getTotalLength() method returns the user agent's computed value for the total length of the path in user units.
> У svg length не взять, нужно цепляться к path внутри svg

### `transform-origin`
* https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
* https://www.w3schools.com/cssref/css3_pr_transform-origin.asp
  
### `matrix`
* The parameters are as follow: `matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())`

### 💡 `scale: -1` перевернёт элемент на 180deg

### 💡 Как реализовать смену картинки при клике:
``` js
//global var: 
let current = 0; let z = 1000  
// slides - контейнер, imges - массив картинок в нём
// если контейнер с картинками не один, то slides.forEach..
slides.addEventListener("click", () => {
  z = z - 1
  imges[current].style.zIndex = z
  
  current = current + 1
  // чтобы начинать с нуля когда дойдёт до конца
  current = current % imges.length
})
```
### 💡 `flex: 0 0 auto`
  > `flex-shrink: 0` - элемент не будет сжиматься
### 💡 document.activeElement
> Возвращает текущий сфокусированный элемент
```js 
if (document.activeElement !== input){}
```
### 💡 e.target.type
> покажет значение type для input который получил событие
```js
if (e.target.type === "text") {
  let inputText = e.target.value;
  if (inputText.length > 2) {
    colorize("#6391E8", line, placeholder);
  } else {
    colorize("#FE8C99", line, placeholder);
  }
}
```
### stroke-dashoffset
https://css-tricks.com/almanac/properties/s/stroke-dashoffset/
> in GSAP `strokeDashoffset`
> задаёт смещение пуктивной обводки относительно первоначального положения
### stroke-dasharray
> задаёт сдвиг линии
https://css-tricks.com/svg-line-animation-works/
> 
