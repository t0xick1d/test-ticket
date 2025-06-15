import React, { ChangeEvent, useState } from 'react';
import { TicketsList, Filter, CountTransplants, Spinner } from '../../components';
import { useGetTicketsQuery, useGetSearchIdQuery } from '../../redux/ducks/tickets';

import style from './style.module.scss';

const TicketsSearch: React.FC = () => {
   const [alignment, setAlignment] = useState('cheap');
   const [transplants, setTransplants] = useState({
      all: true,
      noneTransplants: false,
      oneTransplants: false,
      twoTransplants: false,
      threeTransplants: false,
   });
   const searchid = useGetSearchIdQuery('');
   const ticket = useGetTicketsQuery('sdasdasdsa');
   const handleChange = (e: React.MouseEvent<HTMLElement>, newAlignment: string) => {
      setAlignment(newAlignment);
   };
 const transplantsChange = (event: ChangeEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;
      setTransplants({
         ...transplants,
         [target.name]: target.checked,
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
               <TicketsList
                  list={ticket.data ? ticket.data : []}
                  alignment={alignment}
                  transplants={transplants}
               />
            </div>
         </section>
      </div>
   );
};

export default TicketsSearch;
