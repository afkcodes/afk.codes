import { IconType } from 'react-icons';
import { LuBook, LuHeadphones, LuMusic, LuZap } from 'react-icons/lu';
import { PiCalendar } from 'react-icons/pi';
import { RxVideo } from 'react-icons/rx';

const projectMap: Array<{
  name: string;
  description: string;
  year: number;
  url?: string;
  icon: IconType;
}> = [
  {
    name: 'Audio_x',
    description: 'A JavaScript Audio library that supports most popular formats.',
    year: 2023,
    url: 'https://github.com/afkcodes/audio_x',
    icon: LuHeadphones
  },
  {
    name: 'Calendar',
    description: 'A Clean Calendar component built with React and TailwindCSS.',
    year: 2023,
    url: 'https://github.com/afkcodes/calendar',
    icon: PiCalendar
  },

  {
    name: 'Flutter Phosphor Icons',
    description: 'A Icon library on top of Phosphor Icons for flutter.',
    year: 2023,
    url: 'https://github.com/afkcodes/flutter_phosphor_icons',
    icon: LuZap
  },
  {
    name: 'Free Dictionary API',
    description: 'A free dictionary api for the web.',
    year: 2023,
    icon: LuBook
  },
  {
    name: 'Sunoh',
    description: 'A music and podcast player built with React Native.',
    year: 2023,
    icon: LuMusic
  },
  {
    name: 'Katha',
    description: 'An app for watching Indian Mythological Shows and Videos.',
    year: 2023,
    icon: RxVideo
  }
];

export { projectMap };
