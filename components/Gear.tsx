import { Link } from '../renderer/Link';
import TextLight from './TextLight';

interface Gear {
  header: string;
  items: Array<{
    name: string;
    url: string;
  }>;
}

const Gear: React.FC<Gear> = ({ items, header }) => {
  return (
    <div>
      <TextLight customClass='text-xl font-semibold'>
        <p>{header}</p>
      </TextLight>

      <ul className='flex flex-col gap-1 list-disc list-inside mt-4'>
        {items.map((item) => (
          <li>
            <Link
              href={item.url}
              target='_blank'
              className='hover:underline text-sm underline-offset-2 hover:text-accentText transition-all duration-300'
            >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gear;
