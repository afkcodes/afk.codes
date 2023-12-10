import { ReactElement } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from '../renderer/Link';
import TextLight from './TextLight';

interface Project {
  name: string;
  description: string;
  year: number;
  icon: ReactElement;
  url?: string;
}

const Project: React.FC<Project> = ({ name, description, year, url, icon }) => {
  return (
    <div className='flex justify-center hover:bg-darkTertiary h-56 w-56 rounded-md -ml-6 p-6 transition-all ease-in duration-200 cursor-pointer'>
      <div className='flex flex-col justify-center items-start gap-2'>
        <div>{icon}</div>
        <p>
          <TextLight customClass='text-lg font-medium'>{name}</TextLight>
        </p>
        <p className='text-sm font-semibold'>{description}</p>
        <Link
          href={url}
          className='underline underline-offset-2 hover:text-accentText transition-all duration-300'
          target='_blank'
        >
          {url ? (
            <div className='flex items-center'>
              Check on Github <BsArrowRightShort size={20} />
            </div>
          ) : (
            <p>Coming Soon</p>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Project;
