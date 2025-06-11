import React from 'react';
import style from './style.module.scss';

const Item = ({ data }) => {
   const formatMinutesToHours = (minutes) => `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;

   return (
      <>
         <div className={style.containerMainInf}>
            <p className={style.priceText}>{data.price} P</p>
            <p className={style.carrierText}>{data.carrier}</p>
         </div>
         <ul className={style.containerSegments}>
            {data.segments.map((e) => (
               <li className={style.containerSegmentsItem}>
                  <div style={{ width: 120 }}>
                     <p style={{ color: '#adbbc3', fontSize: 12, textTransform: 'uppercase' }}>
                        MOW - HKT
                     </p>
                     <p>{e.date}</p>
                  </div>
                  <div style={{ width: 120 }}>
                     <p style={{ color: '#adbbc3', fontSize: 12, textTransform: 'uppercase' }}>
                        В пути
                     </p>
                     <p>{formatMinutesToHours(e.duration)}</p>
                  </div>
                  <div style={{ width: 120 }}>
                     <p style={{ color: '#adbbc3', fontSize: 12, textTransform: 'uppercase' }}>
                        {e.stops.length} пересадки
                     </p>
                     <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {e.stops.map((e) => (
                           <p style={{ padding: 2, alignItems: 'center' }}>{e}</p>
                        ))}
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </>
   );
};

export default Item;
