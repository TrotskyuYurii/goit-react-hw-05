import axios from "axios";

const APIKEY = 'ce6a1b88047b13bd18b6699c20edd0e7';
const APITOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTZhMWI4ODA0N2IxM2JkMThiNjY5OWMyMGVkZDBlNyIsInN1YiI6IjY2MTExODQyOGMwYTQ4MDE3ZTA0MzI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9wfjF3348bqJ5GBahp8Rrcmf41lIGVpT4K__QP2ST28';


//Створюємо свій варіант аксіо
const instance = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    Authorization: `Bearer ${APITOKEN}`,
  }
});


export const requestTrandingToday = async () => {
  const { data } = await instance.get(
    `/3/trending/movie/day?language=en-US`
  );
  return data;
};

export const requestSearch = async (queryWord) => {

  const { data } = await instance.get(
    `/3/search/movie?query=${queryWord}&include_adult=false&language=en-US&page=1`
  );
  return data;
};

export const requestDetails = async (queryWord) => {

  const { data } = await instance.get(
    `/3/movie/${queryWord}?language=en-US`
  );
  return data;

};

export const requestCast = async (queryWord) => {

  const { data } = await instance.get(
    `/3/movie/${queryWord}/credits?language=en-US`
  );
  return data;

};


export const requestReviews = async (queryWord) => {

  const { data } = await instance.get(
    `/3/movie/${queryWord}/reviews?language=en-US&page=1`
  );
  return data;

};