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
    <div className='flex justify-start bg-darkTertiary md:bg-transparent md:hover:bg-darkTertiary h-48 w-full md:w-56 rounded-md md:-ml-6 md:p-6 p-4 transition-all ease-in duration-200 cursor-pointer'>
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
