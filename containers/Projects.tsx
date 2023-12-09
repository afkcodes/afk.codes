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
      <div>
        <Project />
      </div>
    </section>
  );
};

export default Projects;
