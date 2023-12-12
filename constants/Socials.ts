import { IconType } from 'react-icons';
import { SiGithub, SiLinkedin, SiSpotify, SiX } from 'react-icons/si';

const socialMap: Array<{ href: string; icon: IconType }> = [
  {
    href: 'https://www.linkedin.com/in/ashish-kumar-aa5927b2/',
    icon: SiLinkedin
  },
  { href: 'https://github.com/afkcodes', icon: SiGithub },
  { href: 'https://twitter.com/afkashish', icon: SiX },
  { href: 'https://open.spotify.com/user/r1atcs1zurfr1ncqyf592iox7', icon: SiSpotify }
];

export { socialMap };
