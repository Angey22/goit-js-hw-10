import './css/common.css';
import getRefs from './js/get-refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css'
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const refs = getRefs();

refs.breed.classList.add('is-hidden');
refs.error.classList.add('is-hidden');

Notify.init({
    width: '300px',
    position: 'center-top',
    distance: '15px',
    timeout: 3000,
    cssAnimationStyle: 'zoom',
    fontFamily: 'Arial, sans-serif',
    fontSize: '22px',
});


fetchBreeds().then(markupSelectBreeds).catch(() => {
  refs.loader.classList.add('is-hidden');
  Notify.failure(refs.error.textContent);
});

function markupSelectBreeds(breeds) {
  refs.breed.classList.remove('is-hidden');
  refs.loader.classList.add('is-hidden');

  const markup = breeds.map((breed) => {
    return `<option value="${breed.id}">${breed.name}</option>`
  }).join('');

  refs.breed.innerHTML = markup;

  refs.breed.setAttribute("id", "single");
  new SlimSelect({
    select: '#single'
  });
}

refs.breed.addEventListener('change', onSelectCatBreed);

function onSelectCatBreed(e) {
  refs.loader.classList.remove('is-hidden');
  refs.catInfo.classList.add('is-hidden');

  fetchCatByBreed(e.target.value).then(dataArr => {
    refs.loader.classList.add('is-hidden');
    refs.catInfo.classList.remove('is-hidden');

    if (dataArr.length === 0) {
      return Notify.warning(`Sorry, nothing was found for the breed. You may be interested in other cat breeds.`);
    }

    markupCatInfo(dataArr[0])
  }).catch(() => {
    refs.loader.classList.add('is-hidden');
    Notify.failure(refs.error.textContent);
  });
}

function markupCatInfo(dataObj) {
  const { url, breeds } = dataObj;
  const { name, description, temperament } = breeds[0];

  refs.catInfo.innerHTML = `
    <img src="${url}" alt="${name}" class=""/>
    <div class="desc-wrapper">
      <h2>${name}</h2>
      <p class="description">${description}</p>
      <p class="temperament"><b>Temperament: </b>${temperament}</p>
    </div>`;

}
