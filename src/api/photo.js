import axios from 'axios';

const key = '38739577-5b9ff17fb3b59e43140008137';
const BASE_URL = 'https://pixabay.com/api/';


export const getAllPhotoBySearch = async (searchValue, page) => {
  const requestParams = `?key=${key}&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;
  const { data } = await axios(`${BASE_URL}${requestParams}`);
  return data;
};
