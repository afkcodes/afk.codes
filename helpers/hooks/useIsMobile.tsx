import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  };

  const checkIsMobile = () => {
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setIsMobile(windowWidth < breakpoints.sm);
  };

  useEffect(() => {
    checkIsMobile(); // Initial check

    const handleResize = () => {
      checkIsMobile(); // Check on window resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export { useIsMobile };
