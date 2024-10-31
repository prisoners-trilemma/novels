import React, { useState, useEffect } from 'react';

const Background: React.FC<{ background: string }> = ({ background }) => {
  const [visibleBackground, setVisibleBackground] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (background !== '') {
      const img = new Image();
      img.src = background;
      img.onload = () => {
        setIsFading(true);
        setTimeout(() => {
          setVisibleBackground(background);
          setIsFading(false);
        }, 500);
      };
    } else {
      if (visibleBackground) {
        setIsFading(true);
        setTimeout(() => {
          setVisibleBackground(null);
          setIsFading(false);
        }, 500);
      }
    }
  }, [background, visibleBackground]);

  return (
    <div
      className={`fixed -z-50 top-0 left-0 right-0 h-full bg-center bg-contain bg-no-repeat transition-opacity duration-500 ease-in-out`}
      style={{
        backgroundImage: visibleBackground ? `url(${visibleBackground})` : 'none',
        opacity: isFading ? 0 : 1,
      }}
    />
  );
};

export default Background;
