import TextLight from '../components/TextLight';
import Work from '../components/Work';

const Experience = () => {
  return (
    <section>
      <div className='mb-10'>
        <h2>
          <TextLight customClass='font-bold text-3xl'>Experience</TextLight>
        </h2>
      </div>
      <div className='flex flex-col gap-8'>
        <Work
          position='Senior Software Engineer - Frontend'
          startMonth='April'
          startYear={2022}
          orgName='Rakuten India'
          orgURL='https://corp.rakuten.co.in/'
          isCurrent={true}
          stacks={['TS', 'Next.js', 'React-Router', 'TailwindCSS', 'Vite', 'Node.JS']}
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
          stacks={['TS', 'Next.js', 'Redux', 'Chakra UI', 'Node.JS', 'React Native']}
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
          stacks={['JavaScript', 'Cocos2D JS', 'Bootstrap', 'React', 'ASO']}
        />
      </div>
    </section>
  );
};

export default Experience;
