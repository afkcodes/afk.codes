import { Fragment } from 'react';
import { Link } from '../renderer/Link';

interface Stack {
  name: string;
  url: string;
  icon: React.ReactElement;
}
const Stack: React.FC<Stack> = ({ name, url, icon }) => {
  return (
    <Link className='flex gap-3 items-end' href={url} target='_blank'>
      <Fragment>{icon}</Fragment>
      <p className='text-sm'>{name}</p>
    </Link>
  );
};

export default Stack;
