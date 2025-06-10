import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import style from './styled.module.scss';

const CountTransplants = () => {
   return (
      <div className={style.container}>
         <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Все" />
            <FormControlLabel control={<Checkbox />} label="Без пересадок" />
            <FormControlLabel control={<Checkbox />} label="1 пересадка" />
            <FormControlLabel control={<Checkbox />} label="2 пересадки" />
            <FormControlLabel control={<Checkbox />} label="3 пересадки" />
         </FormGroup>
      </div>
   );
};

export default CountTransplants;
