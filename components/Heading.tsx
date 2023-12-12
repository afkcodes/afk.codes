import TextLight from './TextLight';

interface Heading {
  title: string;
  id?: string;
  subtitle?: string;
}
const Heading: React.FC<Heading> = ({ title, subtitle, id }) => {
  return (
    <div className='mb-10' id={id ? id : ''}>
      <h2>
        <TextLight customClass='font-bold text-3xl'>{title}</TextLight>
      </h2>
      {subtitle ? <p className='text-sm mt-1'>{subtitle}</p> : null}
    </div>
  );
};

export default Heading;
