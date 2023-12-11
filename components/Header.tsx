import { Link } from '../renderer/Link';
import Button from './Button';

const Header = () => {
  return (
    <header className='sticky top-[-0.1px] m-0 z-10 bg-darkSecondary/40 backdrop-blur-2xl shadow-md py-3 '>
      <nav className='flex w-full justify-between items-center px-12 '>
        <Link href='/' className='flex justify-center items-center gap-2'>
          <p className='text-xl font-bold italic cursor-pointer px-2 py-1 bg-hoverPrimaryButton'>
            afk.codes
          </p>
        </Link>
        <ul className='flex justify-center items-center gap-6'>
          <li>
            <Button text='About' type='ghost' radius='md' href='/#intro' behavior='link' />
          </li>
          <li>
            <Button text='Projects' type='ghost' radius='md' href='/#projects' behavior='link' />
          </li>
          <li>
            <Button text='Stack' type='ghost' radius='md' href='/#stacks' behavior='link' />
          </li>
          <li>
            <Button text='Resume' type='ghost' radius='md' href='' behavior='link' />
          </li>
          <li>
            <Button text='Contact' type='ghost' radius='md' href='/#contact' behavior='link' />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
