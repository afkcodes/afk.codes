import Intro from '../../components/Intro';
import Experience from '../../containers/Experience';
import Projects from '../../containers/Projects';

function Page() {
  return (
    <div className='flex flex-col gap-20'>
      <Intro />
      <Experience />
      <Projects />
    </div>
  );
}

export { Page };
