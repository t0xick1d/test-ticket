import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Filter = ({ alignment, handleChange }) => {
   return (
      <>
         <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
         >
            <ToggleButton value="cheap">Самый дешевый</ToggleButton>
            <ToggleButton value="speed">Самый Быстрый</ToggleButton>
         </ToggleButtonGroup>
      </>
   );
};

export default Filter;
