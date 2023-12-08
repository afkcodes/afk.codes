import ashish from '../assets/ashish.jpg';
import Image from './Image';

const Intro = () => {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex gap-8'>
        <div className='h-80 w-80 rounded-md overflow-hidden shrink-0'>
          <Image src={ashish} alt='Ashish picture' loading='lazy' />
        </div>
        <div className='text-base'>
          <p>
            Hey, 👋 I'm Ashish! I wear many hats—I'm a developer, an explorer, a music buff, and a
            home cook
          </p>
          <br />
          <p>
            Currently, I'm working on all things web-related at Rakuten India in Bengaluru. I kicked
            off my journey in 2019 as a software engineer, starting with JavaScript game
            development.
          </p>
          <br />
          <p>
            Originally from Bokaro, Jharkhand, India, I enjoy crafting websites and mobile apps.
            While coding, I groove to the beats of 90s and early 2000s Bollywood tunes.
            Additionally, I experiment in the kitchen, cooking up some delicious dishes whenever I
            get the chance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
