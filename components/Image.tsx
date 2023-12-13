import { Fragment } from 'react';

type ImageLoadStatus = 'LOADED' | 'LOADING' | 'ERROR';

interface Image {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  customClass?: string;
  height?: number | string;
  width?: number | string;
}

const Image: React.FC<Image> = ({
  src,
  alt,
  loading = 'lazy',
  customClass = '',
  height,
  width
}) => {
  return (
    <Fragment>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`${customClass ? customClass : 'h-full w-full'}`}
        height={height}
        width={width}
      />
    </Fragment>
  );
};

export default Image;
