import axios from 'axios';
const API_KEY = '366c7f50514546b6bda4a0edda450f99';
const ROOT_URL = `http://beta.newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
export const FETCH_NEWS = 'fetch_news';
export function fetchNews(news) {
  const url = `${ROOT_URL}&q=${news}`;
  const request = axios.get(url);
  return {
    type: FETCH_NEWS,
    payload: request
  };
}
// 'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=364dedacdb8f4d11a206171264fe16e6'
