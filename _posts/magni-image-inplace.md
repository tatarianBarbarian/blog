---
title: 'magni-image-inplace: Hello, world!'
date: '2020-03-16'
excerpt: 'Меня как раз интересовало, как работает один из распространённых UI-виджетов, и его изучение вылилось в npm пакет'
coverImage: '/assets/blog/hello-world/cover.jpg'
author:
  name: Tim Neutkens
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

Меня припизднуло ковидом, и я оказался в ситуации, когда работу мозги не вывозят, бездействия тоже. Меня как раз интересовало, как работает один из распространённых UI-виджетов, и его изучение вылилось в npm пакет [magni-image-inplace](https://www.npmjs.com/package/magni-image-inplace). 

## Суть

Потрогать можно [тут](https://tatarianbarbarian.github.io/magni-image-inplace/).

Библиотека -- веб-компонент, оборачивающий картинки.

Работает с React, Vue. В принципе, должен работать с любым фреймворком, лишь бы браузер поддерживал. 

Поддержка браузерами -- в основном новьё, т.к. используются слоты и [::slotted](https://developer.mozilla.org/ru/docs/Web/CSS/::slotted)

## Выводы

Изобрёл велосипед. Постарался сделать его хорошо и доволен результатом. В свободное время хочу допиливать его дальше. По ходу дела довелось поглубже поразбираться с `npm`, `vite`, `github-pages`, `web-components`.
