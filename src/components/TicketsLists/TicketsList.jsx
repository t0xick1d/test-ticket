import React from 'react';
import Item from './Item';
import style from './style.module.scss';
import { Grid, Box, Card } from '@mui/material';

const TicketsList = ({ list, transplants, alignment }) => {
   const filterTransplants = (item) => {
      if (transplants.all) {
         return true;
      }
      if (transplants.noneTransplants) {
         return item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0;
      }
      if (
         transplants.threeTransplants &&
         item.segments[0].stops.length === 3 &&
         item.segments[1].stops.length === 3
      ) {
         return true;
      }
      if (
         transplants.twoTransplants &&
         item.segments[0].stops.length === 2 &&
         item.segments[1].stops.length === 2
      ) {
         return true;
      }
      if (
         transplants.oneTransplants &&
         item.segments[0].stops.length === 1 &&
         item.segments[1].stops.length === 1
      ) {
         return true;
      }
   };
   const itemsCopy = list.filter((e) => filterTransplants(e));
   if (alignment === 'cheap') {
      itemsCopy.sort((a, b) => a.price - b.price);
   }
   if (alignment === 'speed') {
      itemsCopy.sort(
         (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration),
      );
   }

   return (
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
            {itemsCopy
               ? itemsCopy.map((e, i) => <Card key={`${i}list`} children={<Item data={e} />} />)
               : ''}
         </Grid>
      </Box>
   );
};

export default TicketsList;
