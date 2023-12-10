import TextLight from './TextLight';

interface Heading {
  title: string;
}
const Heading: React.FC<Heading> = ({ title }) => {
  return (
    <div className='mb-10'>
      <h2>
        <TextLight customClass='font-bold text-3xl'>{title}</TextLight>
      </h2>
    </div>
  );
};

export default Heading;
