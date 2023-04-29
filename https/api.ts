import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

const API = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";
export const getmovies = async () => {
  const res = await api.get("/trending/all/day" + process.env.API_KEY);
  return res.data.results;
};

export const getmovidesdetail = async (pid: number) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/ ${pid}` + process.env.API_KEY
  );
  return res.data;
};

export const getmovides = (pid: number) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/ ${pid}` + process.env.API_KEY)
    .then((res) => res.data);
};

export const getsearchapi = async (keyword: string) =>
  await axios.get(
    " https://api.themoviedb.org/3/search/movie?api_key=3ac20e37c3b1bdd32dadec03d228864f&query=" +
      keyword
  );
