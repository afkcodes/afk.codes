import { Link } from '../renderer/Link';

interface Social {
  href: string;
  icon: React.ReactElement;
}

const Social: React.FC<Social> = ({ href, icon }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className=' text-mediumText hover:text-lightText transition-all duration-300'
    >
      {icon as unknown as React.ReactNode}
    </Link>
  );
};

export default Social;
