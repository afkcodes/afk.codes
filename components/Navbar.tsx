import { Terminal } from 'lucide-react';
import { Link } from '../renderer/Link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-3 sticky top-0 z-10 bg-darkBackground/10  backdrop-blur-2xl px-12'>
      <Link href='/' className='flex justify-center items-center gap-2'>
        <Terminal size={22} color='white' />
        <p className='text-xl font-bold italic cursor-pointer'>afk.codes</p>
      </Link>
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
          <Button text='Resume' type='ghost' radius='md' />
        </li>
        <li>
          <Button text='Contact' type='ghost' radius='md' />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
