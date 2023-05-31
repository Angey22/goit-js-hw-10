const API_KEY = 'live_37U8ytbeoItoZp7n7jB5LsCHhh6mH2w1KRgH8dn1oM4BfG3pE0efY30RoI3vCpx0';

const BASE_URL = 'https://api.thecatapi.com/v1';

const options = {
  headers: {
    'x-api-key': API_KEY
  }
}

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`, options).then(response => {
    if (!response.ok) {
          throw new Error('Failed to fetch breeds');
    }

    return response.json()
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, options).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data for cat');
    }

    return response.json()
  });
}