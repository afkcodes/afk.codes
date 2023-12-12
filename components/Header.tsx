import { useState } from 'react';
import { useIsMobile } from '../helpers/hooks/useIsMobile';
import { Link } from '../renderer/Link';
import Button from './Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const closeMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <header
      className={`w-full fixed top-0 m-0 z-10 bg-darkSecondary/60 backdrop-blur-2xl shadow-md py-3
      ${isOpen ? 'h-full' : 'h-auto'}
      `}
    >
      <nav className='flex w-full justify-between items-center px-4 md:px-12 '>
        {!isOpen ? (
          <Link href='/' className='flex justify-center items-center gap-2'>
            <p className='text-xl font-bold italic cursor-pointer px-2 py-1 bg-hoverPrimaryButton'>
              afk.codes
            </p>
          </Link>
        ) : null}
        <div className='flex  w-full flex-col items-end'>
          <div className='justify-self-end md:hidden'>
            <Button
              text={!isOpen ? 'Menu' : 'Close'}
              onClick={closeMenu}
              type='ghost'
              radius='md'
            />
          </div>
          <ul
            className={`  
            ${isOpen ? ' flex flex-col w-full justify-center' : 'hidden md:flex'} 
            justify-center items-center gap-6`}
          >
            <li>
              <Button
                text='About'
                type='ghost'
                radius='md'
                onClick={closeMenu}
                href='/#intro'
                behavior='link'
              />
            </li>
            <li>
              <Button
                text='Projects'
                type='ghost'
                radius='md'
                onClick={closeMenu}
                href='/#projects'
                behavior='link'
              />
            </li>
            <li>
              <Button
                text='Stack'
                type='ghost'
                radius='md'
                onClick={closeMenu}
                href='/#stacks'
                behavior='link'
              />
            </li>
            <li>
              <Button
                text='Uses'
                type='ghost'
                radius='md'
                onClick={closeMenu}
                href='/uses'
                behavior='link'
              />
            </li>
            <li>
              <Button
                text='Resume'
                type='ghost'
                radius='md'
                href='https://drive.google.com/file/d/1dIOtp_kbChgOIO7saEL5doASLcSmW4PG/view?usp=drive_link'
                behavior='link'
                target='_blank'
                onClick={closeMenu}
              />
            </li>
            <li>
              <Button
                text='Contact'
                type='ghost'
                radius='md'
                onClick={closeMenu}
                href='/#contact'
                behavior='link'
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
