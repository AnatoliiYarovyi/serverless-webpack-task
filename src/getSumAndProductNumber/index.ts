import buildResponse from '../buildResponse';
import { Event } from './interface';

export async function getSumAndProductNumber(event: Event) {
  const value: number = JSON.parse(event.body);

  const arrNumber: number[] = [];
  for (let i = 1; i <= value; i++) {
    arrNumber.push(i);
  }
  const getSumAndProductNumber = arrNumber.reduce(
    (acc, el, i) => {
      if (i < value) {
        acc.sumNumber += el;
        acc.productNumber *= el;
      }
      return acc;
    },
    { sumNumber: 0, productNumber: 1 },
  );
  const body = {
    getSumAndProductNumber,
  };

  return buildResponse(201, body);
}
