import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import style from './styled.module.scss';

const CountTransplants = ({ transplants, setTransplants }) => {
   return (
      <div className={style.container}>
         <FormGroup>
            <FormControlLabel
               control={<Checkbox checked={transplants.all} onChange={setTransplants} name="all" />}
               label="Все"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     checked={transplants.noneTransplants}
                     onChange={setTransplants}
                     name="noneTransplants"
                  />
               }
               label="Без пересадок"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     checked={transplants.oneTransplants}
                     onChange={setTransplants}
                     name="oneTransplants"
                  />
               }
               label="1 пересадка"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     checked={transplants.twoTransplants}
                     onChange={setTransplants}
                     name="twoTransplants"
                  />
               }
               label="2 пересадки"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     checked={transplants.threeTransplants}
                     onChange={setTransplants}
                     name="threeTransplants"
                  />
               }
               label="3 пересадки"
            />
         </FormGroup>
      </div>
   );
};

export default CountTransplants;
