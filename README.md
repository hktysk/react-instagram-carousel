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
* [use-interval](https://github.com/Hermanya/use-interval#readme)

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
  speed={20}
  barHeight={3}
  backgroundSize={'contain'}
  backgroundColor={'white'} />
```
| props | description |
| --- | --- |
| images | string array. required. URL for display images. must length 2 or more. |
| nextMsec? | number. time until next image. unit is msec. (default: 5000) |
| speed? | number. progress bar forward speed. unit is msec. (default: 200) |
| barHeight? | number. height for progress bar. unit is px. (default: 1.5) |
| backgroundSize? | 'cover' or 'contain'. background-size property for CSS. (default: 'cover') |
| backgroundColor? | string. background-color property for CSS. (default: '#202322') |

### Example
```sh
$ git clone git://github.com/hktysk/react-instagram-carousel.git
$ cd react-instagram-carousel
$ npm install
$ npm start
```
