import { Fragment } from 'react';

type ImageLoadStatus = 'LOADED' | 'LOADING' | 'ERROR';

interface Image {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  customClass?: string;
}

const Image: React.FC<Image> = ({ src, alt, loading = 'lazy', customClass = '' }) => {
  return (
    <Fragment>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`${customClass ? customClass : 'h-full w-full'}`}
      />
    </Fragment>
  );
};

export default Image;
