// A function that will export an object with a set of links to elements in an HTML document.
export default function getRefs() {
  return {
    breed: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
  };
}