export const formatMinutesToHours = (minutes: number) =>
   `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
export const getHoursAndMinutes = (datetimeStr: string) =>
   `${new Date(datetimeStr).getHours().toString().padStart(2, '0')}:${new Date(datetimeStr)
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
