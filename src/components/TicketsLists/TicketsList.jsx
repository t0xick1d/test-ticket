import React from 'react';
import Item from './Item';
import style from './style.module.scss';
import { Grid, Box, Card } from '@mui/material';

const TicketsList = ({ list }) => {
   return (
      // <Grid className={style.containerList}>
      <Box sx={{ flexGrow: 1 }}>
         <Grid
            container
            spacing={4}
            sx={{
               justifyContent: 'center',
               alignItems: 'center',
            }}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            className={style.containerList}
         >
            {list ? list.map((e, i) => <Card key={`${i}list`} children={<Item data={e} />} />) : ''}
         </Grid>
      </Box>
   );
};

export default TicketsList;
