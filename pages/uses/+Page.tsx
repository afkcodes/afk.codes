import Heading from '../../components/Heading';
import gearsMap from '../../constants/gears';
import Gears from '../../containers/Gears';

const Page = () => {
  return (
    <section className='mt-28'>
      <div>
        <Heading
          title='My Essential Tools'
          subtitle='Explore the tools that keep me productive and relaxed, my secret sauce for a balanced workflow and well-being.'
        />
      </div>
      <Gears gears={gearsMap} />
    </section>
  );
};

export { Page };
