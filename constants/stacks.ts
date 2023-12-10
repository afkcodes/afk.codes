import { IconType } from 'react-icons';
import {
  SiCss3,
  SiEslint,
  SiFastify,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrettier,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTypescript,
  SiVite,
  SiVitest
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandTailwind } from 'react-icons/tb';

const stackMap: Array<{ name: string; url: string; icon: IconType }> = [
  {
    name: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: SiHtml5
  },
  { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: SiCss3 },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs/installation', icon: TbBrandTailwind },
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: SiJavascript
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    icon: SiTypescript
  },
  {
    name: 'React',
    url: 'https://react.dev/learn',
    icon: SiReact
  },
  {
    name: 'Next.JS',
    url: 'https://nextjs.org/docs/',
    icon: SiNextdotjs
  },
  {
    name: 'React Native',
    url: 'https://reactnative.dev/docs/getting-started',
    icon: TbBrandReactNative
  },
  {
    name: 'Flutter',
    url: 'https://docs.flutter.dev/',
    icon: SiFlutter
  },
  {
    name: 'Redux',
    url: 'https://redux.js.org/introduction/getting-started',
    icon: SiRedux
  },
  {
    name: 'React Query',
    url: 'https://tanstack.com/query/v3/docs/react/overview',
    icon: SiReactquery
  },
  {
    name: 'Vite',
    url: 'https://vitejs.dev/guide/',
    icon: SiVite
  },
  {
    name: 'Vitest',
    url: 'https://vitest.dev/guide/',
    icon: SiVitest
  },
  {
    name: 'Node',
    url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
    icon: SiNodedotjs
  },
  {
    name: 'Fastify',
    url: 'https://fastify.dev/',
    icon: SiFastify
  },
  {
    name: 'Firebase',
    url: 'https://firebase.google.com/docs/',
    icon: SiFirebase
  },
  {
    name: 'Eslint',
    url: 'https://eslint.org/docs/latest/use/getting-startedprettier',
    icon: SiEslint
  },
  {
    name: 'Prettier',
    url: 'https://prettier.io/docs/en/',
    icon: SiPrettier
  }
];

export { stackMap };
