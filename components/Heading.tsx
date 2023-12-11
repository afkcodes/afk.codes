import TextLight from './TextLight';

interface Heading {
  title: string;
  id: string;
}
const Heading: React.FC<Heading> = ({ title, id }) => {
  return (
    <div className='mb-10' id={id}>
      <h2>
        <TextLight customClass='font-bold text-3xl'>{title}</TextLight>
      </h2>
    </div>
  );
};

export default Heading;
