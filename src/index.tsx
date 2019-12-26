import React, { useState, useEffect, useRef } from 'react';
import './style.css';

type Props = {
  images: string[]
  nextMsec?: number
  barHeight?: number
  backgroundSize?: 'cover' | 'contain'
  backgroundColor?: string
}

const App: React.FC<Props> = (props) => {
  const { images } = props;
  if (images.length < 2) return null;

  /* define base variable */
  const nextMsec: number = props.nextMsec || 5000;
  const barHeight: number = props.barHeight || 1.5;
  const backgroundSize: 'cover' | 'contain' = props.backgroundSize || 'cover';
  const backgroundColor: string = props.backgroundColor || '#202322';

  const [position, setPosition] = useState<number>(0);
  const [isTransition, setIsTransition] = useState<boolean>(true);
  const [isReset, setIsReset] = useState<boolean>(true);
  const timeout = useRef<ReturnType<typeof setTimeout>[]>([]);

  /* common functions */
  function sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }
  function noneTransition(callback: Function): Promise<void> {
    return new Promise(async (resolve): Promise<void> => {
      setIsTransition(false);
      await sleep(20);
      callback();
      await sleep(20);
      setIsTransition(true);
      await sleep(20);
      resolve();
    });
  }
  async function startCarousel(p: number): Promise<void> {
    if (timeout.current.length > 0) {
      timeout.current.forEach(n => clearTimeout(n));
      timeout.current = [];
    }

    setIsReset(false);
    setPosition(p);

    timeout.current.push(setTimeout(async () => {
      if (p === images.length - 1) {
        await sleep(2000);
        await noneTransition(() => setIsReset(true));
        startCarousel(0);
      } else {
        startCarousel(p + 1);
      }
    }, nextMsec));
  }
  async function skip(w: 'next' | 'before') {
    const afterPosition = w === 'next'
      ? position === images.length - 1 ? 0 : position + 1
      : position === 0 ? 0 : position - 1

    await noneTransition(async () => {
      setIsReset(true);
      await sleep(20);
      startCarousel(afterPosition);
    });
  }

  /* initialize */
  useEffect(() => {
    (async () => {
      await noneTransition(() => setIsReset(true));
      startCarousel(0);
    })();
  }, [props.images]);


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
      skip(Math.sign(diff) > -1 ? 'before' : 'next');
    }
  }

  return (
    <div id="react-instagram-carousel"
      onTouchStart={ontouchstart}
      onTouchEnd={ontouchend}>

      {
        images.map((v, k) => (
          <div
            className="images-in-carousel"
            style={{
              backgroundImage: `url(${v})`,
              backgroundSize,
              backgroundColor,
              opacity: isReset
                ? k === 0 ? 1 : 0
                : k === position ? 1 : 0
            }}
            key={v} />
        ))
      }

      <div
        className="hidden-box-for-click-skip"
        onClick={() => skip('before')} />
      <div
        className="hidden-box-for-click-skip"
        onClick={() => skip('next')} />

      <div className="bar-box">
        {
          images.map((_, k) => (
            <div className="bar" style={{
              width: `calc(100% / ${images.length} - 6%)`,
              height: `${barHeight}px`
            }} key={k}>
            <div className='load' style={{
              width: isReset
                ? "0"
                : k <= position ? "100%" : "0",
              transition: isTransition
                ? k === position ? `${nextMsec}ms linear` : "0s"
                : "0s"
            }} key={k} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
