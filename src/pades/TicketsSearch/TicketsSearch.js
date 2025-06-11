import React, { useState } from 'react';
import { TicketsList, Filter, CountTransplants } from '../../components';
import { ticketsList } from '../../api';

import style from './style.module.scss';

const TicketsSearch = () => {
   const [alignment, setAlignment] = useState('cheap');

   const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
   };
   return (
      <div className={style.App}>
         <section className={style.mainContainer}>
            <CountTransplants />
            <div className={style.containerList}>
               <Filter alignment={alignment} handleChange={handleChange} />
               <TicketsList list={ticketsList} />
            </div>
         </section>
      </div>
   );
};

export default TicketsSearch;
