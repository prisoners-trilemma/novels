import { useState, useEffect, useRef } from 'react';

type NotificationProps = {
  message: string;
  duration?: number;
};

export default function Notification({ message, duration = 2000 }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [startFadeOut, setStartFadeOut] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setStartFadeOut(true);
          }, duration);
          observer.disconnect();
        }
      },
      { threshold: 1 },
    );

    if (notificationRef.current) {
      observer.observe(notificationRef.current);
    }
  }, [duration]);

  return (
    <div
      ref={notificationRef}
      className={`top-4 left-4 transition-opacity duration-1000 ${
        isVisible ? (startFadeOut ? 'opacity-0' : 'opacity-100') : 'opacity-0'
      } ${
        isVisible ? "fixed" : "none"
      } text-red-700 font-tegomin px-4 py-2 rounded shadow-lg`}
    >
      {message}
    </div>
  );
}
