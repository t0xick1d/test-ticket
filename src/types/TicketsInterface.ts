export interface TicketsI {
   price: number;
   carrier: string;
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
export interface TransplantsI {
   all: boolean;
   noneTransplants: boolean;
   oneTransplants: boolean;
   twoTransplants: boolean;
   threeTransplants: boolean;
}
