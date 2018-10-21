import axios from 'axios';
const API_KEY = '366c7f50514546b6bda4a0edda450f99';
const ROOT_URL = 'https://newsapi.org/v2/top-headlines?';
const ROOT_SOURCE = ` https://newsapi.org/v2/sources?language=en&apiKey=${API_KEY}`;
const HEAD_URL = `https://newsapi.org/v1/articles?source=google-news&apiKey=${API_KEY}`;

export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_SOURCES = 'FETCH_SOURCES';
export const FETCH_HEAD = 'FETCH_HEAD';

export function fetchNews(news) {
  const url = `${ROOT_URL}q=${news}&apiKey=${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_NEWS,
    payload: request
  };
}
export function fetchSources() {
  const sourceUrl = `${ROOT_SOURCE}&us`;
  const request = axios.get(sourceUrl);
  return {
    type: FETCH_SOURCES,
    payload: request
  };
}
export function fetchHead() {
  const url = HEAD_URL;
  const request = axios.get(url);
  return {
    type: FETCH_HEAD,
    payload: request
  };
}
