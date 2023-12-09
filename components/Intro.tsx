import ashish from '../assets/ashish.jpg';
import Image from './Image';

const Intro = () => {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex gap-6'>
        <div className='bg-darkSecondary p-4 rounded-xl flex items-center'>
          <div className='h-80 w-80 rounded-md overflow-hidden shrink-0'>
            <Image src={ashish} alt='Ashish picture' loading='lazy' />
          </div>
        </div>
        <div className='bg-darkSecondary p-4 rounded-xl'>
          <p>Hey 👋, I'm Ashish! I'm a developer, an explorer, a music buff, and a home cook</p>
          <br />
          <p>
            Currently, I'm working on all things web at Rakuten India (Bengaluru). I kicked off my
            journey in 2019 as a software engineer, starting with JavaScript game development.
          </p>
          <br />
          <p>
            Hailing from Bokaro, Jharkhand, India, I find joy in creating websites and hybrid apps.
            I groove to the beats of 90s and early 2000s Bollywood tunes. Moreover, I like to
            explore my culinary skills in the kitchen, whipping up delightful dishes whenever the
            opportunity arises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
