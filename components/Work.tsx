import { Fragment } from 'react';
import { Link } from '../renderer/Link';
import TextLight from './TextLight';

interface Work {
  position: string;
  startMonth: string;
  startYear: number;
  orgName: string;
  orgURL: string;
  orgLogoUrl?: string;
  endMonth?: string;
  endYear?: number;
  isCurrent?: boolean;
}

const Work: React.FC<Work> = ({
  position,
  startMonth,
  startYear,
  orgName,
  orgURL,
  endMonth,
  endYear,
  isCurrent
}) => {
  return (
    <div>
      <p>
        <TextLight customClass='font-semibold'>{position}</TextLight>
      </p>
      <Link
        href={orgURL}
        target='_blank'
        className='text-sm hover:text-accentText transition-all duration-300 underline underline-offset-4'
      >
        {orgName}
      </Link>
      <p className='text-sm'>
        {startMonth} {startYear} -{' '}
        {isCurrent ? (
          'Present'
        ) : (
          <Fragment>
            {endMonth} {endYear}
          </Fragment>
        )}
      </p>
    </div>
  );
};

export default Work;