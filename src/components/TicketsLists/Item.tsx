import React from 'react';
import style from './style.module.scss';
import { TicketsI } from '../../types/TicketsInterface';
import { formatMinutesToHours, getHoursAndMinutes } from '../../utils/timeUtils/timeUtils';

interface MyComponentProps {
   data: TicketsI;
}

const Item: React.FC<MyComponentProps> = ({ data }) => (
   <div className={style.container}>
      <div className={style.containerMainInf}>
         <p className={style.priceText}>{data.price} P</p>
         <p className={style.carrierText}>{data.carrier}</p>
      </div>
      <ul className={style.containerSegments}>
         {data.segments.map((e, i) => (
            <li key={`segment${i}`} className={style.containerSegmentsItem}>
               <div className={style.containerInfo}>
                  <p className={style.secondaryText}>MOW - HKT</p>
                  <p>{getHoursAndMinutes(e.departureTime)}</p>
               </div>
               <div className={style.containerInfo}>
                  <p className={style.secondaryText}>В пути</p>
                  <p>{formatMinutesToHours(e.duration)}</p>
               </div>
               <div className={style.containerInfo}>
                  <p className={style.secondaryText}>{e.stops.length} пересадки</p>
                  <div className={style.containerStops}>
                     {e.stops.map((e, i) => (
                        <p key={i} className={style.pStops}>
                           {e}
                        </p>
                     ))}
                  </div>
               </div>
            </li>
         ))}
      </ul>
   </div>
);

export default Item;
