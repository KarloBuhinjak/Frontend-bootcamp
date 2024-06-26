import http from "../http-common";

const getAll = () => {
  return http.get("/");
};

const getAllClubs = () => {
  return http.get("/clubs");
};

const get = (id) => {
  return http.get(`/${id}`);
};

const create = (data) => {
  return http.post("/", data);
};

const update = (id, data) => {
  return http.put(`/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/${id}`);
};

const getFilteredPlayers = (filters) => {
  const {
    nameId,
    age,
    position,
    clubId,
    sortBy,
    sortOrder,
    pageNumber,
    pageSize,
  } = filters;

  let url = `/players?sortBy=${sortBy}&sortOrder=${sortOrder}&pageNumber=${pageNumber}&pageSize=${pageSize}`;

  if (nameId) {
    url += `&nameId=${nameId}`;
  }
  if (age) {
    url += `&age=${age}`;
  }
  if (position) {
    url += `&position=${position}`;
  }
  if (clubId) {
    url += `&clubId=${clubId}`;
  }

  return http.get(url);
};

const searchByName = (name) => {
  return http.get(`/players?name=${name}`);
};

const PlayerService = {
  getAll,
  getAllClubs,
  get,
  create,
  update,
  remove,
  getFilteredPlayers,
  searchByName,
};

export default PlayerService;
