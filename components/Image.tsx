interface Image {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}

const Image: React.FC<Image> = ({ src, alt, loading = 'lazy' }) => {
  return <img src={src} alt={alt} loading={loading} />;
};

export default Image;
