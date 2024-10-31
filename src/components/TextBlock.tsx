import React, { useEffect, useRef, useState } from 'react';

type TextBlockProps = {
  className?: string;
  freeze?: boolean;
  onload?: () => void;
  children?: React.ReactNode;
};

const disableScroll = (execute = true): void => {
  const duration = 3000;
  if (!execute) return;
  const disableScroll = (e: TouchEvent): void => e.preventDefault();
  const allElements: NodeListOf<HTMLElement> = document.querySelectorAll('html *');

  allElements.forEach((el) => (el.style.overflow = 'hidden'));
  window.addEventListener('touchmove', disableScroll, { passive: false });

  setTimeout(() => {
    allElements.forEach((el) => (el.style.overflow = 'visible'));
    window.removeEventListener('touchmove', disableScroll);
  }, duration);
};

const TextBlock: React.FC<TextBlockProps> = ({ className, children, freeze = false, onload }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          disableScroll(freeze);
          if (onload) onload();
          observer.disconnect();
        }
      },
      {
        threshold: freeze ? 1 : 0.4,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freeze]);

  return (
    <div
      ref={sectionRef}
      className={`${className || ''} text-xs w-5/6 lg:text-sm m-auto transition-opacity transform duration-700 ease-out ${
        isVisible
          ? `opacity-100 translate-y-0 ${freeze ? 'animate-suddenUp' : 'animate-fadeInUp'}`
          : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  );
};

export default TextBlock;
