import buildResponse from '../buildResponse';
import { Event } from './interface';

export async function findFirstPositiveElement(event: Event) {
  const arrNumbers: number[] = JSON.parse(event.body);
  const firstPositiveElement = arrNumbers.find(el => el > 0);
  const indexFirstPositiveElement = arrNumbers.findIndex(
    el => el === firstPositiveElement,
  );
  const body = {
    firstPositiveElement,
    indexFirstPositiveElement,
  };

  return buildResponse(201, body);
}
