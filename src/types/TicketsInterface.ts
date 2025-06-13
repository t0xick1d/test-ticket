export interface TicketsI {
   price: number;
   carrier: number;
   date: string;
   segments: [SegmentsI];
}
export interface SegmentsI {
   origin: string;
   destination: string;
   departureTime: string;
   duration: number;
   stops: string[];
}
