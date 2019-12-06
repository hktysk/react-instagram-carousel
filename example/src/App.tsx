import React, { useState, useEffect } from 'react'
import Carousel from '../../src'

let images: string[] = [];
for (let i = 0; i < 5; i++) {
  images.push(`/images/${i}.jpg`);
}

let images2: string[] = [];
for (let i = 5; i < 10; i++) {
  images2.push(`/images/${i}.jpg`);
}

const App: React.FC = () => (
  <div style={{
    display: 'flex'
  }}>
    <header id="header" style={{
      width: '400px',
      height: '600px',
      color: '#fff',
      backgroundColor: '#8b50ff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '5vh',
      letterSpacing: '1vh',
      marginRight: '10px'
    }}>EXAMPLE</header>
    <div style={{width: '400px', height: '600px', marginRight: '10px'}}>
      <Carousel images={images} nextMsec={3000} />
    </div>
    <div style={{width: '400px', height: '600px', marginRight: '10px'}}>
      <Carousel images={images2} nextMsec={3000} />
    </div>
  </div>
);

export default App
