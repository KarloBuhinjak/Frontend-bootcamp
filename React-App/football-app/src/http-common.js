import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5196/FootBallPlayer",
  headers: {
    "Content-type": "application/json",
  },
});
