import React, { useState, useEffect } from 'react';
import { Spinner } from '../../components';
import { useGetTicketsQuery, useGetSearchIdQuery } from '../../redux/ducks/tickets';
import Paper from '@mui/material/Paper';
import { Column, DataTypeProvider, DataTypeProviderProps } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, TableRowDetail } from '@devexpress/dx-react-grid-material-ui';
import { RowDetailState, SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';
import Item from './Item';

import style from './style.module.scss';
import { TicketsI } from 'types/TicketsInterface';
import { JSX } from 'react/jsx-runtime';

const TicketsSearch: React.FC = () => {
   const [columns] = useState<Column[]>([
      { name: 'carrier', title: 'Carrier' },
      { name: 'date', title: 'Date' },
      { name: 'price', title: 'Price' },
   ]);

   const [expandedRowIds, setExpandedRowIds] = useState<(number | string)[]>([]);

   const searchid = useGetSearchIdQuery('');
   const ticket = useGetTicketsQuery('sdasdasdsa');
   const [rows, setRows] = useState<TicketsI[]>([]);
   const [currencyColumns] = useState(['price']);
   useEffect(() => {
      if (!ticket.isLoading && ticket.data !== undefined) {
         setRows(ticket.data);
      }
   }, [ticket, ticket.isLoading]);

   const PriceFormatter = ({ value }: any) => <div>{value} P</div>;

   const CurrencyTypeProvider = (props: JSX.IntrinsicAttributes & DataTypeProviderProps) => (
      <DataTypeProvider formatterComponent={PriceFormatter} {...props} />
   );

   if (ticket.isLoading) {
      return <Spinner />;
   }
   if (ticket.error || searchid.error) {
      return <div>errorSearchID</div>;
   }
   return (
      <div className={style.App}>
         <section className={style.mainContainer}>
            <div className={style.containerList}>
               <Paper>
                  <Grid rows={rows ?? []} columns={columns}>
                     <RowDetailState
                        expandedRowIds={expandedRowIds}
                        onExpandedRowIdsChange={setExpandedRowIds}
                     />
                     <CurrencyTypeProvider for={currencyColumns} />
                     <SortingState />
                     <IntegratedSorting />
                     <Table />
                     <TableHeaderRow showSortingControls />
                     <TableRowDetail contentComponent={Item} />
                  </Grid>
               </Paper>
            </div>
         </section>
      </div>
   );
};

export default TicketsSearch;
