import Heading from '../components/Heading';
import Work from '../components/Work';

const Experience = () => {
  return (
    <section id='experience'>
      <Heading title='Experience' />
      <div className='flex flex-col gap-8'>
        <Work
          position='Senior Software Engineer - Frontend'
          startMonth='April'
          startYear={2022}
          orgName='Rakuten India'
          orgURL='https://corp.rakuten.co.in/'
          isCurrent={true}
          stacks={['TypeScript', 'Next.js', 'React-Router', 'TailwindCSS', 'Vite', 'Node.JS']}
        />
        <Work
          position='Frontend Engineer'
          startMonth='March'
          startYear={2021}
          orgName='Learnq.ai'
          orgURL='https://www.learnq.ai/'
          isCurrent={false}
          endMonth='March'
          endYear={2022}
          stacks={['TypeScript', 'Next.js', 'Redux', 'Chakra UI', 'Node.JS', 'React Native']}
        />
        <Work
          position='Software Engineer - JavaScript Games'
          startMonth='March'
          startYear={2019}
          orgName='HashCube'
          orgURL='https://www.hashcube.com/'
          isCurrent={false}
          endMonth='March'
          endYear={2021}
          stacks={['JavaScript', 'Game Closure', 'Cocos2D JS', 'Firebase', 'React', 'ASO']}
        />
      </div>
    </section>
  );
};

export default Experience;
