import Stack from '../components/Stack';
import TextLight from '../components/TextLight';
import { stackMap } from '../constants/stacks';

const Stacks = () => {
  return (
    <section>
      <div className='mb-10'>
        <h2>
          <TextLight customClass='font-bold text-3xl'>Stack</TextLight>
        </h2>
      </div>

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
