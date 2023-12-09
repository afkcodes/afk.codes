import React from 'react';

const TextLight = ({
  children,
  customClass = ''
}: {
  children: React.ReactNode;
  customClass?: string;
}) => {
  return <span className={`text-lightText ${customClass} `}>{children}</span>;
};

export default TextLight;
