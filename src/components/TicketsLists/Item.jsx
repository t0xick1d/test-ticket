import React from 'react';
import style from './style.module.scss';

const Item = ({ data }) => {
   console.log(data);

   const formatMinutesToHours = (minutes) => {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;

      return `${hours}ч ${remainingMinutes}м`;
   };
   return (
      <li className={style.containerItem}>
         <div className={style.containerMainInf}>
            <p className={style.priceText}>{data.price} P</p>
            <p className={style.carrierText}>{data.carrier}</p>
         </div>
         <ul className={style.containerSegments}>
            {data.segments.map((e) => {
               return (
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
               );
            })}
         </ul>
      </li>
   );
};

export default Item;
