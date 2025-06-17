import { SegmentsI, TicketsI, TransplantsI } from 'types/TicketsInterface';

export const filterTransplants = (
   transplants: TransplantsI,
   item: TicketsI,
): boolean | undefined => {
   if (transplants.all) {
      return true;
   }
   if (transplants.threeTransplants && item.segments.every((e: SegmentsI) => e.stops.length <= 3)) {
      return true;
   }
   if (transplants.twoTransplants && item.segments.every((e: SegmentsI) => e.stops.length <= 2)) {
      return true;
   }
   if (transplants.oneTransplants && item.segments.every((e: SegmentsI) => e.stops.length <= 1)) {
      return true;
   }
   if (transplants.noneTransplants) {
      return item.segments.every((e: SegmentsI) => e.stops.length === 0);
   }
};
