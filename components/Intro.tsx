import ashish from '../assets/ashish.jpg';
import Image from './Image';
import TextLight from './TextLight';

const Intro = () => {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex gap-6'>
        <div className='h-80 w-80 rounded-md overflow-hidden shrink-0'>
          <Image src={ashish} alt='Ashish picture' loading='lazy' />
        </div>
        <div>
          <p>
            Hey 👋,<TextLight customClass='font-semibold'> I'm Ashish!</TextLight> I'm a{' '}
            <TextLight customClass='font-semibold'>developer</TextLight>, an{' '}
            <TextLight customClass='font-semibold'>explorer</TextLight>, a{' '}
            <TextLight customClass='font-semibold'>music buff</TextLight>, and a{' '}
            <TextLight customClass='font-semibold'>home cook</TextLight>
          </p>
          <br />
          <p>
            Currently, I'm working on all things web at
            <TextLight customClass='font-semibold'> Rakuten India (Bengaluru)</TextLight>. I kicked
            off my journey in 2019 as a software engineer, starting with JavaScript game
            development.
          </p>
          <br />
          <p>
            Hailing from Bokaro, Jharkhand, India, I find joy in creating{' '}
            <TextLight customClass='font-semibold'>websites and hybrid apps</TextLight>. I groove to
            the beats of{' '}
            <TextLight customClass='font-semibold'>90s and early 2000s Bollywood tunes</TextLight> .
            Moreover, I like to explore my culinary skills in the kitchen, whipping up delightful
            dishes whenever the opportunity arises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
