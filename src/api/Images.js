import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '38739577-5b9ff17fb3b59e43140008137';

export async function getImagesBySearch(q, page) {
  const resp = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${q}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`
  );
  return resp.data;
}
