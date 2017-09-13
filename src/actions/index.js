import axios from 'axios';
const API_KEY = '366c7f50514546b6bda4a0edda450f99';
const ROOT_URL = `http://beta.newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
export const FETCH_NEWS = 'FETCH_NEWS';

export function fetchNews(news) {
  const url = `${ROOT_URL}&q=${news}`;
  const request = axios.get(url);
  return {
    type: FETCH_NEWS,
    payload: request
  };
}
