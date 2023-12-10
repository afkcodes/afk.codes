import Project from '../components/Project';
import TextLight from '../components/TextLight';
import { projectMap } from '../constants/projects';

const Projects = () => {
  return (
    <section>
      <div className='mb-10'>
        <h2>
          <TextLight customClass='font-bold text-3xl'>Projects</TextLight>
        </h2>
      </div>
      <div className='flex flex-wrap gap-12'>
        {projectMap.map((project) => {
          return (
            <Project
              key={project.name}
              name={project.name}
              description={project.description}
              year={project.year}
              url={project.url}
              icon={<project.icon size={22} />}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
