import React, { ChangeEvent } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TransplantsI } from '../../types/TicketsInterface';

import style from './styled.module.scss';
interface MyComponentProps {
   transplants: TransplantsI;
   setTransplants: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CountTransplants: React.FC<MyComponentProps> = ({ transplants, setTransplants }) => (
   <div className={style.container}>
      <FormGroup>
         <FormControlLabel
            control={
               <Checkbox
                  data-testid="checkbox-all"
                  checked={transplants.all}
                  onChange={setTransplants}
                  name="all"
               />
            }
            label="Все"
         />
         <FormControlLabel
            control={
               <Checkbox
                  data-testid="checkbox-none"
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
                  data-testid="checkbox-one"
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
                  data-testid="checkbox-two"
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
                  data-testid="checkbox-three"
               />
            }
            label="3 пересадки"
         />
      </FormGroup>
   </div>
);

export default CountTransplants;
