import React, { useState } from 'react';
import { TicketsList, Filter, CountTransplants } from '../../components';
import { useSelector, useDispatch } from 'react-redux';

import style from './style.module.scss';

const TicketsSearch = () => {
   const [alignment, setAlignment] = useState('cheap');
   const tickets = useSelector((state) => state.ticketsReducer.data);
   const dispatch = useDispatch();

   const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
   };
   return (
      <div className={style.App}>
         <section className={style.mainContainer}>
            <CountTransplants />
            <div className={style.containerList}>
               <Filter alignment={alignment} handleChange={handleChange} />
               <TicketsList list={tickets} />
            </div>
         </section>
      </div>
   );
};

export default TicketsSearch;
