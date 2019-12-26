<p align="center">
  <img src="https://github.com/hktysk/images/blob/master/react-instagram-carousel/screen-shot.png?raw=true">
</p>

# *react-instagram-carousel*
> carousel for React that like instagram story.

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

### Tech
* [Node.js](https://github.com/nodejs/node)
* [React](https://github.com/facebook/react)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [Jest](https://github.com/facebook/jest)
* [enzyme](https://github.com/airbnb/enzyme)

### Installation
```sh
npm install [--save-dev] react-instagram-carousel
```

### Usage
```js
import React from 'react';
import Carousel from 'react-instagram-carousel';

const images = [
  '/img/example1.jpg',
  '/img/example2.jpg',
  '/img/example3.jpg'
];

const App = () => {
  return (
    <div style={{width: '400px', height: '600px'}}>
      <Carousel images={images} />
    </div>
  );
}

export default App;
```

**TypeScript:**

```js
import React from 'react';
import Carousel from 'react-instagram-carousel';

const images: string[] = [
  '/img/example1.jpg',
  '/img/example2.jpg',
  '/img/example3.jpg'
];

const App: React.FC = () => {
  return (
    <div style={{width: '400px', height: '600px'}}>
      <Carousel images={images} />
    </div>
  );
}

export default App;
```

### Props
```js
<Carousel
  images={images}
  nextMsec={3000}
  barHeight={3}
  backgroundSize={'contain'}
  backgroundColor={'white'} />
```
| Props | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| images | string[] |  | Yes | URL for images. must length 2 or more. |
| nextMsec | number | 5000 | No | time until next image. unit is msec. |
| barHeight | number | 1.5 | No | height for progress bar. unit is px. |
| backgroundSize | 'cover' or 'contain' | 'cover' | No | background-size property for CSS. |
| backgroundColor | string | #202322 | No | background-color property for CSS. |

### Example
```sh
$ git clone git://github.com/hktysk/react-instagram-carousel.git
$ cd react-instagram-carousel
$ npm install
$ npm start
```
