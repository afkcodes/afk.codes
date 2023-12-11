import Heading from '../components/Heading';
import Project from '../components/Project';
import { projectMap } from '../constants/projects';

const Projects = () => {
  return (
    <section>
      <Heading title='Projects' id='projects' />
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
