import { socialMap } from '../constants/Socials';
import { Link } from '../renderer/Link';
import Social from './Social';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center bg-darkSecondary/40 backdrop-blur-2xl shadow-md py-12'>
      <section className='w-full flex flex-col gap-2 max-w-[900px]' id='contact'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-semibold'>Let's connect and geek out about the web stuff!</h2>
          <p className='text-sm font-medium'>
            Drop me a line at &nbsp;
            <Link
              className='px-2 py-1 hover:bg-darkTertiary hover:text-accentText font-medium text-lightText transition-all duration-300 rounded-sm'
              href='mailto:mail.ashish.kmr@protonmail.com'
            >
              mail.ashish.kmr@protonmail.com
            </Link>
            &nbsp; to start the conversation!
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

        <div className='flex flex-col justify-center items-start mt-12'>
          <p>
            Built with
            <Link
              className='px-2 py-1 mx-2 hover:bg-darkTertiary hover:text-accentText font-medium text-lightText transition-all duration-300 rounded-sm'
              href='https://vike.dev/'
              target='_blank'
            >
              Vike
            </Link>
            and
            <Link
              className='px-2 py-1 mx-2 hover:bg-darkTertiary hover:text-accentText font-medium text-lightText transition-all duration-300 rounded-sm'
              href='https://tailwindcss.com/'
              target='_blank'
            >
              TailwindCSS
            </Link>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
