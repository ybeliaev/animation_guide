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

### 💡 GSAP
* `yoyo: true, repeat: -1 `
  > `yoyo: true` Gets or sets the timeline's `yoyo` state, where `true` causes the `timeline` to go back and forth, alternating backward and forward on each repeat.
  >if `repeat` is `1`, the `timeline will` play a total of twice (the initial play plus 1 repeat). To repeat INDEFINITELY, use `-1`.
* `tl.fromTo('.text', {x:30, opacity:0},{x:0,opacity:1}, '<')`
  > `<` - эта анимация ОДНОВРЕМЕННО с предидущей
  > если `<50%`  -  50% задержки 
* чтобы части svg были видны за пределами элемента при их захожднии за пределы фигуры
  > необходимо, но НЕДОСТАТОЧНО `overflow: visible; `
  > ещё нужно удалить `<clipPath id="clip0_1_4"><rect width="98" height="98" fill="white"/></clipPath>` из тела `svg`
  