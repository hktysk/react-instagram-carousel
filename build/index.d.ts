import React from 'react';
import './style.css';
declare type Props = {
    images: string[];
    nextMsec?: number;
    barHeight?: number;
    backgroundSize?: 'cover' | 'contain';
    backgroundColor?: string;
};
declare const App: React.FC<Props>;
export default App;
