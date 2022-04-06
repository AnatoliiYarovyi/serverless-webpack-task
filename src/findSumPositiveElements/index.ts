import buildResponse from '../buildResponse';
import { Event } from './interface';

export async function findSumPositiveElements(event: Event) {
  const arrNumbers: number[] = JSON.parse(event.body);
  const sumPositiveElement: number = arrNumbers.reduce((acc: number, el) => {
    if (el > 0) {
      acc += el;
    }
    return acc;
  }, 0);
  const body = {
    sumAllPositiveElement: sumPositiveElement,
  };

  return buildResponse(201, body);
}
