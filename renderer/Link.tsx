import { usePageContext } from './usePageContext';

const Link = (props: {
  href?: string;
  className?: string;
  children: React.ReactNode;
  target?: '_blank' | 'self' | 'parent' | 'top';
  onClick?: () => void;
}) => {
  const pageContext = usePageContext();
  const className = [props.className, pageContext.urlPathname === props.href && 'is-active']
    .filter(Boolean)
    .join(' ');
  return (
    <a
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
      {...props}
      className={className}
    />
  );
};

export { Link };
