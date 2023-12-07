/* eslint-disable @typescript-eslint/no-explicit-any */
type ButtonStyleType = 'primary' | 'secondary' | 'icon' | 'dark-primary' | 'ghost';
type Radius = 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none';

interface Button {
  text: string;
  type?: ButtonStyleType;
  icon?: any;
  radius?: Radius;
}

const ButtonType: {
  [key in ButtonStyleType]: string;
} = {
  primary: 'bg-primaryButton text-white hover:bg-hoverPrimaryButton active:bg-activePrimaryButton',
  secondary:
    'bg-secondaryButton text-white hover:bg-hoverSecondaryButton active:bg-activeSecondaryButton',
  icon: '',
  ghost:
    'bg-ghostButtonBg text-white hover:bg-hoverGhostButtonBg active:accent-activeGhostButtonBg',
  'dark-primary':
    'bg-darkButton text-white hover:bg-hoverPrimaryButton active:bg-activePrimaryButton'
};

const radiusMap: {
  [key in Radius]: string;
} = {
  none: 'rounded-none',
  full: 'rounded-full',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl'
};

const Button: React.FC<Button> = ({ type = 'primary', text, radius = 'none' }) => {
  return (
    <button
      className={`
      ${ButtonType[type]} 
      ${radiusMap[radius]}
      flex items-center px-3 py-2 transition-all duration-300
      `}
    >
      {text}
    </button>
  );
};

export default Button;
