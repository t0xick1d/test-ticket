import React from 'react';
import Item from './Item';
import style from './style.module.scss';
import { Grid, Box, Card } from '@mui/material';
import { TicketsI, SegmentsI } from '../../types/TicketsInterface';
interface MyComponentProps {
   list: TicketsI[];
   transplants: {
      all: boolean;
      noneTransplants: boolean;
      oneTransplants: boolean;
      twoTransplants: boolean;
      threeTransplants: boolean;
   };
   alignment: string;
}

const TicketsList: React.FC<MyComponentProps> = ({ list, transplants, alignment }) => {
   const filterTransplants = (item: TicketsI): boolean | undefined => {
      if (transplants.all) {
         return true;
      }
      if (
         transplants.threeTransplants &&
         item.segments.some((e: SegmentsI) => e.stops.length === 3)
      ) {
         return true;
      }
      if (
         transplants.twoTransplants &&
         item.segments.some((e: SegmentsI) => e.stops.length === 2)
      ) {
         return true;
      }
      if (
         transplants.oneTransplants &&
         item.segments.some((e: SegmentsI) => e.stops.length === 1)
      ) {
         return true;
      }
      if (transplants.noneTransplants) {
         return item.segments.some((e: SegmentsI) => e.stops.length === 0);
      }
   };
   const itemsCopy = list.filter((e) => filterTransplants(e));
   if (alignment === 'cheap') {
      itemsCopy.sort((a: TicketsI, b: TicketsI) => a.price - b.price);
   }
   if (alignment === 'speed') {
      itemsCopy.sort(
         (a, b) =>
            a.segments.reduce((acc, e) => acc + e.duration, 0) -
            b.segments.reduce((acc, e) => acc + e.duration, 0),
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
