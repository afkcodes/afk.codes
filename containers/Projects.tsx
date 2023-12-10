import { LuBook, LuHeadphones, LuMusic, LuZap } from 'react-icons/lu';
import { PiCalendar } from 'react-icons/pi';
import { RxVideo } from 'react-icons/rx';
import Project from '../components/Project';
import TextLight from '../components/TextLight';

const Projects = () => {
  return (
    <section>
      <div className='mb-10'>
        <h2>
          <TextLight customClass='font-bold text-3xl'>Projects</TextLight>
        </h2>
      </div>
      <div className='flex flex-wrap gap-12'>
        <Project
          name='Calendar'
          description='A Clean Calendar component built with React and TailwindCSS.'
          year={2023}
          url='https://github.com/afkcodes/calendar'
          icon={<PiCalendar size={22} />}
        />
        <Project
          name='Audio_x'
          description='A JavaScript Audio library that plays most popular formats.'
          year={2023}
          url='https://github.com/afkcodes/audio_x'
          icon={<LuHeadphones size={22} />}
        />
        <Project
          name='Flutter Phosphor Icons'
          description='A Icon library on top of Phosphor Icons for flutter.'
          year={2023}
          url='https://github.com/afkcodes/flutter_phosphor_icons'
          icon={<LuZap size={22} />}
        />
        <Project
          name='Free Dictionary API'
          description='A free dictionary api for the web.'
          year={2023}
          icon={<LuBook size={22} />}
        />
        <Project
          name='Sunoh'
          description='A music and podcast player built on React Native.'
          year={2023}
          icon={<LuMusic size={22} />}
        />
        <Project
          name='Katha'
          description='An app for watching Indian Mythological Shows and Videos.'
          year={2023}
          icon={<RxVideo size={22} />}
        />
      </div>
    </section>
  );
};

export default Projects;
