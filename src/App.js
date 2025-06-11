import React, { useState } from 'react';
import { ReactComponent as Logo } from './logoPlane.svg';
import { TicketsList, Filter, CountTransplants } from './components';
import { ticketsList } from './api';

import style from './App.module.scss';

function App() {
   const [alignment, setAlignment] = useState('cheap');
 
   const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
   };
   return (
      <div className={style.App}>
         <div className={style.logoContainer}>
            <Logo />
         </div>
         <section className={style.mainContainer}>
            <CountTransplants />
            <div className={style.containerList}>
               <Filter alignment={alignment} handleChange={handleChange} />
               <TicketsList list={ticketsList} />
            </div>
         </section>
      </div>
   );
}

export default App;
