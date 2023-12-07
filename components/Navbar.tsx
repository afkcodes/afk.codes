import { Link } from '../renderer/Link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-3'>
      <div>
        <Link href='/' className='text-xl font-bold italic cursor-pointer'>
          afk.codes
        </Link>
      </div>
      <ul className='flex justify-center items-center gap-6'>
        <li>
          <Button text='About' type='ghost' radius='md' />
        </li>
        <li>
          <Button text='Projects' type='ghost' radius='md' />
        </li>
        <li>
          <Button text='Stack' type='ghost' radius='md' />
        </li>
        <li>
          <Button text='Contact' type='ghost' radius='md' />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
