const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '11349157-fc9c2ea73d90d296f310c891d';

function fetchImages(name = '', page = 1) {
  return fetch(
    `${BASE_URL}/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No picture with name ${name}`));
  });
}

const api = { fetchImages };

export default api;
