import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const API = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";
export const getmovies = async () => {
  const res = await api.get(
    "/trending/all/day?api_key=3ac20e37c3b1bdd32dadec03d228864f"
  );
  return res.data.results;
};

export const getmovidesdetail = async (pid: number) => {
  const res = await axios(`https://api.themoviedb.org/3/movie/ ${pid}` + API);
  return res.data;
};
