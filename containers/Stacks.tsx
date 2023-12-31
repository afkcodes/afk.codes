import Heading from '../components/Heading';
import Stack from '../components/Stack';
import { stackMap } from '../constants/stacks';

const Stacks = () => {
  return (
    <section id='stacks' className='scroll-mt-28'>
      <Heading title='Stack' />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-y-8 '>
        {stackMap.map((stack) => {
          return (
            <Stack
              key={stack.name}
              name={stack.name}
              url={stack.url}
              icon={<stack.icon size={22} />}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Stacks;
