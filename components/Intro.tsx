import ashish from '../assets/ashish.webp';
import Image from './Image';
import TextLight from './TextLight';

const Intro = () => {
  return (
    <section className='flex flex-col gap-4 mt-12 md:mt-28 scroll-mt-28' id='intro'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='h-80 w-80 rounded-md overflow-hidden shrink-0 grayscale'>
          <Image
            src={ashish}
            alt='Ashish picture'
            loading='eager'
            customClass='h-full object-cover scale-105'
            height={320}
            width={320}
          />
        </div>
        <div>
          <p>
            Hey 👋,<TextLight customClass='font-semibold'> I'm Ashish!</TextLight> I'm a{' '}
            <TextLight customClass='font-semibold'>developer</TextLight>, an{' '}
            <TextLight customClass='font-semibold'>explorer</TextLight>, a{' '}
            <TextLight customClass='font-semibold'>music buff</TextLight>, and a{' '}
            <TextLight customClass='font-semibold'>home cook.</TextLight>
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
