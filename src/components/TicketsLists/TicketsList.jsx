import React from 'react';
import Item from './Item';
import style from './style.module.scss';

const TicketsList = ({ list }) => {
   return (
      <ul className={style.containerList}>
         {list.map((e) => {
            return <Item data={e} key={e.id} />;
         })}
      </ul>
   );
};

export default TicketsList;
