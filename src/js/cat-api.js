//! API_KEY - чужой!
const API_KEY = 'live_3Mnea8iNtopVC0hvGsDfEMtgOKxjswZlqkRz9krsSz70qvMXA4BaQRqrC91mtiVf';

const BASE_URL = 'https://api.thecatapi.com/v1';

const options = {
  headers: {
    'x-api-key': API_KEY
  }
}

export function fetchBreeds() {
  fetch(`${BASE_URL}/breeds`, options).then(response => {
    if (!response.ok) {
          throw new Error('Failed to fetch breeds');
    }

    return response.json()
  });
}

export function fetchCatByBreed(breedId) {
  fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, options).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data for cat');
    }

    return response.json()
  });
}