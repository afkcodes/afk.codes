import Heading from '../components/Heading';
import Stack from '../components/Stack';
import { stackMap } from '../constants/stacks';

const Stacks = () => {
  return (
    <section>
      <Heading title='Stack' id='stacks' />
      <div className='grid grid-cols-4 gap-y-8 '>
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
