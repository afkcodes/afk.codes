import { Fragment, useState } from 'react';

type ImageLoadStatus = 'LOADED' | 'LOADING' | 'ERROR';

interface Image {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  customClass?: string;
}

const Image: React.FC<Image> = ({ src, alt, loading = 'lazy', customClass = '' }) => {
  const [status, setStatus] = useState('LOADING');

  const onImageLoad = () => {
    setStatus('LOADED');
  };
  const onImageError = () => {
    setStatus('ERROR');
  };

  return (
    <Fragment>
      {status === 'LOADING' ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={onImageLoad}
          onError={onImageError}
          className={`${customClass ? customClass : 'h-full w-full'}`}
        />
      ) : null}
    </Fragment>
  );
};

export default Image;
