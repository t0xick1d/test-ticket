import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface MyComponentProps {
   alignment: string;
   handleChange: (e: React.MouseEvent<HTMLElement>, newAlignment: string) => void;
}

const Filter: React.FC<MyComponentProps> = ({ alignment, handleChange }) => (
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
export default Filter;
