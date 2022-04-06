import { middyfy } from '../../libs/lambda';

import buildResponse from '../buildResponse';

const handler = async () => {
  const currentYear = new Date().getFullYear();
  const dateStart = new Date(`January 1, ${currentYear} 00:00:01`);
  const dateToday = new Date();
  const elapsedMilliseconds = dateToday.getTime() - dateStart.getTime();
  const indexNumber = Math.floor(elapsedMilliseconds / 86400000);
  const body = {
    dayOfTheYear: indexNumber,
  };

  return buildResponse(200, body);
};

export const getIndexNumber = middyfy(handler);
