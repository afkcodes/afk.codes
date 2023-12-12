import { socialMap } from '../constants/Socials';
import { Link } from '../renderer/Link';
import Social from './Social';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center px-4 md:p-0 bg-darkSecondary/40 backdrop-blur-2xl shadow-md py-12'>
      <section className='w-full flex flex-col gap-2 max-w-[900px]' id='contact'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-semibold'>Let's connect and geek out about the web stuff!</h2>
          <p className='text-sm font-medium'>
            Drop me a line at
            <Link
              className='px-2 py-1 mx-1 hover:bg-darkTertiary hover:text-accentText font-medium text-lightText transition-all duration-300 rounded-sm'
              href='mailto:mail.ashish.kmr@protonmail.com'
            >
              mail.ashish.kmr@protonmail.com
            </Link>
            to start the conversation!
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold text-2xl text-lightText underline my-4'>or</h2>
          <p>Find me on </p>
          <div className='flex gap-6 mt-4'>
            {socialMap.map((social) => (
              <Social key={social.href} href={social.href} icon={<social.icon size={22} />} />
            ))}
          </div>
        </div>
      </section>
      <hr className='h-px w-full my-6 bg-darkTertiary border-0' />
      <section className='w-full flex flex-col items-center'>
        <div className='w-full flex flex-col gap-2 max-w-[900px]'>
          <div className='flex flex-col justify-center items-start gap-1'>
            <p>
              Built with
              <Link
                className='px-2 py-1 mx-1 hover:bg-darkTertiary hover:text-accentText text-lightText transition-all duration-300 rounded-sm'
                href='https://vike.dev/'
                target='_blank'
              >
                Vike
              </Link>
              and
              <Link
                className='px-2 py-1 mx-1 hover:bg-darkTertiary hover:text-accentText text-lightText transition-all duration-300 rounded-sm'
                href='https://tailwindcss.com/'
                target='_blank'
              >
                TailwindCSS
              </Link>
            </p>
            <p className='text-xs'>{new Date().getFullYear()}&nbsp;&#9400; Ashish Kumar</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
