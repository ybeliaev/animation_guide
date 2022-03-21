# 🔥 Animation_guide 🔥

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
### `transform-origin`
* https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
* https://www.w3schools.com/cssref/css3_pr_transform-origin.asp
  
### `matrix`
* The parameters are as follow: `matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())`

### 💡 `scale: -1` перевернёт элемент на 180deg

### 💡 Как реализовать смену картинки при клике:
``` js
//global var: 
let current = 0; let z = 0  
// slides - контейнер, imges - массив картинок в нём
slides.addEventListener("click", () => {
  z = z + 1
  current = current + 1
  // чтобы начинать с нуля когда дойдёт до конца
  current = current % imges.length
  imges[current].style.zIndex = z
})
```

