import { useEffect, useRef } from 'react';

const AudioController: React.FC<{ bgm: string; se: string }> = ({ bgm, se }) => {
  const bgmRef = useRef<HTMLAudioElement>(null);
  const seRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    bgmRef.current?.play();
  }, [bgm]);
  useEffect(() => {
    seRef.current?.play();
  }, [se]);

  // const fadeAudio = (audioElement: HTMLAudioElement | null, newSrc: string) => {
  //   if (!audioElement) return;

  //   const fadeOut = () => {
  //     return new Promise<void>((resolve) => {
  //       const fadeOutInterval = setInterval(() => {
  //         if (audioElement.volume > 0.08) {
  //           audioElement.volume = Math.max(audioElement.volume - 0.08, 0);
  //         } else {
  //           clearInterval(fadeOutInterval);
  //           audioElement.pause();
  //           audioElement.volume = 0.8;
  //           resolve();
  //         }
  //       }, 100);
  //     });
  //   };

  //   const fadeIn = () => {
  //     audioElement.volume = 0;
  //     const fadeInInterval = setInterval(() => {
  //       if (audioElement.volume < 0.8) {
  //         audioElement.volume = Math.min(audioElement.volume + 0.08, 0.8);
  //       } else {
  //         clearInterval(fadeInInterval);
  //       }
  //     }, 100);
  //   };

  //   fadeOut().then(() => {
  //     audioElement.src = newSrc;
  //     if (newSrc === '') return;
  //     audioElement.load();
  //     audioElement.addEventListener(
  //       'canplaythrough',
  //       () => {
  //         audioElement.play();
  //         fadeIn();
  //       },
  //       { once: true },
  //     );
  //   });
  // };

  // useEffect(() => {
  //   fadeAudio(bgmRef.current, bgm);
  // }, [bgm]);

  // useEffect(() => {
  //   if (se === '') return;
  //   if (!seRef.current) return;
  //   seRef.current.src = se;
  //   seRef.current.load();
  //   seRef.current.addEventListener(
  //     'canplaythrough',
  //     () => {
  //       seRef.current?.play();
  //     },
  //     { once: true },
  //   );
  // }, [se]);

  return (
    <>
      <audio ref={bgmRef} loop src={bgm} />
      <audio ref={seRef} src={se} />
    </>
  );
};

export default AudioController;
