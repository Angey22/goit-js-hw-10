import './css/common.css';
import getRefs from './js/get-refs';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const refs = getRefs();

refs.breed.classList.add('is-hidden');
refs.error.classList.add('is-hidden');