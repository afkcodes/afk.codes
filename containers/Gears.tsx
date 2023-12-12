import { Fragment } from 'react';
import Gear from '../components/Gear';
import { Gear as GearType } from '../constants/gears';

const Gears = ({ gears }: { gears: GearType }) => {
  return (
    <Fragment>
      {gears.map((gear) => (
        <div className='mb-10'>
          <Gear items={gear.items} header={gear.header} />
        </div>
      ))}
    </Fragment>
  );
};

export default Gears;
