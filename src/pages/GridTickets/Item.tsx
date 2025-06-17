import React from 'react';
import { TicketsI } from 'types/TicketsInterface';
import { formatMinutesToHours, getHoursAndMinutes } from '../../utils/timeUtils/timeUtils';

import style from './style.module.scss';

const Item: React.FC<{ row: TicketsI }> = ({ row }) => {
   return (
      <div className={style.containerSegments}>
         {row.segments.map((e, i) => {
            return (
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
            );
         })}
      </div>
   );
};

export default Item;
