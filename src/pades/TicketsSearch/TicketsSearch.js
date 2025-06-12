import React, { useState } from 'react';
import { TicketsList, Filter, CountTransplants, Spinner } from '../../components';
import { useGetTicketsQuery, useGetSearchIdQuery } from '../../store/tickets/ticketsApi';

import style from './style.module.scss';

const TicketsSearch = () => {
   const [alignment, setAlignment] = useState('cheap');
   const [transplants, setTransplants] = useState({
      all: true,
      noneTransplants: false,
      oneTransplants: false,
      twoTransplants: false,
      threeTransplants: false,
   });
   const searchid = useGetSearchIdQuery();
   const ticket = useGetTicketsQuery('sdasdasdsa');

   const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
   };
   const transplantsChange = (event) => {
      setTransplants({
         ...transplants,
         [event.target.name]: event.target.checked,
      });
   };
   if (ticket.isLoading) {
      return <Spinner />;
   }
   if (ticket.error || searchid.error) {
      return <div>errorSearchID</div>;
   }
   return (
      <div className={style.App}>
         <section className={style.mainContainer}>
            <CountTransplants transplants={transplants} setTransplants={transplantsChange} />
            <div className={style.containerList}>
               <Filter alignment={alignment} handleChange={handleChange} />
               <TicketsList list={ticket.data} />
            </div>
         </section>
      </div>
   );
};

export default TicketsSearch;
