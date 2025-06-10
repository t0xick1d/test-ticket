import React, { useState } from 'react';
import { ReactComponent as Logo } from './logoPlane.svg';
import TicketsList from './components/TicketsLists/TicketsList';
import Filter from './components/Filter/Filter';
import CountTransplants from './components/ContTransplants/CountTransplants';

import style from './App.module.scss';

function App() {
   const [alignment, setAlignment] = useState('cheap');
   const ticketsList = [
      {
         id: 1,
         price: 2000,
         carrier: 'iata',
         segments: [
            {
               origin: 'origin',
               destination: 'destination',
               date: '10:45 - 08:30',
               stops: ['stops', 'stops', 'stops', 'stops'],
               duration: 75,
            },
            {
               origin: 'origin',
               destination: 'destination',
               date: '10:45 - 08:30',
               stops: ['stops', 'stops', 'stops'],
               duration: 69,
            },
         ],
      },
      {
         id: 2,
         price: 2000,
         carrier: 'iata',
         segments: [
            {
               origin: 'origin',
               destination: 'destination',
               date: '10:45 - 08:30',
               stops: ['stops', 'stops', 'stops', 'stops'],
               duration: 75,
            },
            {
               origin: 'origin',
               destination: 'destination',
               date: '10:45 - 08:30',
               stops: ['stops', 'stops', 'stops'],
               duration: 69,
            },
         ],
      },
      {
         id: 3,
         price: 2000,
         carrier: 'iata',
         segments: [
            {
               origin: 'origin',
               destination: 'destination',
               date: '10:45 - 08:30',
               stops: ['stops', 'stops', 'stops', 'stops'],
               duration: 75,
            },
            {
               origin: 'origin',
               destination: 'destination',
               date: '10:45 - 08:30',
               stops: ['stops', 'stops', 'stops'],
               duration: 69,
            },
         ],
      },
   ];

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
