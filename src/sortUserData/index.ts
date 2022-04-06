import buildResponse from '../buildResponse';
import { Arr, Event } from './interface';

export async function sortUserData(event: Event) {
  const arr: Arr[] = JSON.parse(event.body);
  const byField = (field: string) => {
    return (a: any, b: any) => (a[field] > b[field] ? 1 : -1);
  };

  const copyArrForSortName = arr.slice(0);
  const sortName = copyArrForSortName.sort(byField('firstName'));

  const copyArrForSortBirthDate = arr.slice(0);
  const sortBirthDate = copyArrForSortBirthDate
    .sort(byField('birthDate'))
    .reverse();
  const body = { sortName, sortBirthDate };

  return buildResponse(201, body);
}
