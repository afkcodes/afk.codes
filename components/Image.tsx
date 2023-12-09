import { Fragment, useState } from 'react';

type ImageLoadStatus = 'LOADED' | 'LOADING' | 'ERROR';

interface Image {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}

const Image: React.FC<Image> = ({ src, alt, loading = 'lazy' }) => {
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
        <Fragment>
          <img src={src} alt={alt} loading={loading} onLoad={onImageLoad} onError={onImageError} />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Image;
