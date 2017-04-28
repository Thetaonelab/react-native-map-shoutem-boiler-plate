import {headers, parseJSON } from './utils';


export function getRestaurantData() {
  const options = {
    headers: headers(),
    method: 'GET',
    //body: JSON.stringify({ email, password })
  };

  return fetch('http://192.168.1.8:3000/api/v1/getRestaurants', options)
    .then(parseJSON);
}