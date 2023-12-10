import { LuTerminal } from 'react-icons/lu';
import { Link } from '../renderer/Link';
import Button from './Button';

const Header = () => {
  return (
    <header className='sticky top-0 z-10 bg-darkSecondary/40 backdrop-blur-2xl shadow-md py-3 '>
      <nav className='flex w-full justify-between items-center px-12 '>
        <Link href='/' className='flex justify-center items-center gap-2'>
          <LuTerminal size={22} color='white' />
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
    </header>
  );
};

export default Header;
