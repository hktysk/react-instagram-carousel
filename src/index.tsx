import React, { useState, useEffect, useRef } from 'react';
import useInterval from 'use-interval';
import './style.css';

type Props = {
  images: string[]
  nextMsec?: number
  speed?: number
  barHeight?: number
  backgroundSize?: 'cover' | 'contain'
  backgroundColor?: string
}

const App: React.FC<Props> = (props) => {
  const { images } = props;
  if (images.length < 2) return null;

  /* define base variable */
  const nextMsec: number = props.nextMsec || 5000;
  const max: number = nextMsec * images.length - 1;
  const speed: number = props.speed || 200;
  const barHeight: number = props.barHeight || 1.5;
  const backgroundSize: 'cover' | 'contain' = props.backgroundSize || 'cover';
  const backgroundColor: string = props.backgroundColor || '#202322';

  /* define state and ref */
  const [time, setTime] = useState<number>(0); // use this for decide progress bar fill or progress
  const [transition, setTransition] = useState<boolean>(true); // for switch progress bar animation on or off
  const [stop, setStop] = useState<boolean>(false); // stop carousel

  /*
    if this variable to specific number not 0,
    increase or decrease progress time,
    and skip carousel(integer or negative number)
  */
  const skipTime = useRef<number>(0);

  /* common function */
  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  /* init */
  useEffect(() => {
    setTime(0);
  }, [props]);

  /* manage interval */
  const [intervalState, setIntervalState] = useState<boolean>(true);
  useInterval(() => setIntervalState(!intervalState), speed);

  /* main processing */
  useEffect(() => {
    if (stop === true) return;

    (async () => {
      if (time >= max) {
        /*
          if carousel finished,
          wait 2 seconds, and reset.
        */
        setStop(true);
        await sleep(2000);
        setTransition(false);
        setTime(0);
        setStop(false);
        return;
      }

      /*
        if want skip, must off animation.
        because each progress bar animation is independently.
      */
      setTransition(skipTime.current !== 0 ? false : true);

      const n = time + speed + skipTime.current;
      const isMinus = n < 0;
      const isOverMax = n > max;
      setTime(isMinus ? speed : isOverMax ? max : n);
      skipTime.current = 0;
    })()
  }, [intervalState]);

  /* use for display image and progress */
  const nowTime = Math.floor(time / nextMsec);
  const image = nowTime === images.length ? images[images.length - 1] : images[nowTime];

  /* for skip when click or flip */
  function skip(range: 'increace' | 'decreace'): void {
    if (stop === true) return;
    skipTime.current = range === 'increace' ? nextMsec : -nextMsec;
  }

  /* when flip */
  const coordX = useRef<number>(0);

  function ontouchstart(e: any): void {
    const touches = e.changedTouches[0];
    coordX.current = touches.pageX;
  }

  function ontouchend(e: any): void {
    const touches = e.changedTouches[0];
    const diff = touches.pageX - coordX.current;
    if (Math.abs(diff) > 100) {
      skip(Math.sign(diff) > -1 ? 'decreace' : 'increace');
    }
  }


  return (
    <div id="react-instagram-carousel" style={{
      backgroundImage: `url(${image})`,
      backgroundSize: backgroundSize,
      backgroundColor: backgroundColor,
    }} onTouchStart={ontouchstart} onTouchEnd={ontouchend}>

      <div
        className="hidden-box-for-click-skip"
        onClick={() => skip('decreace')} />
      <div
        className="hidden-box-for-click-skip"
        onClick={() => skip('increace')} />

      <div className="bar-box">
        {
          images.map((_, k) => (
            <div className="bar" style={{
              width: `calc(100% / ${images.length} - 6%)`,
              height: `${barHeight}px`
            }} key={k}>
              <div className='load' style={{
                width:
                  k + 1 <= nowTime // already
                    ? '100%'
                    : k === nowTime // nowTime
                      ? `${(Math.floor((time + speed) - (k * nextMsec)) / nextMsec) * 100}%`
                      : '0%', // still
                transition: transition  ? `${speed}ms linear` : '0s'
              }} key={k} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
