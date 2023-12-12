const isMobileDevice = () => {
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  };

  const windowWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  const isMobile = windowWidth < breakpoints.sm;

  return isMobile;
};

export { isMobileDevice };
