import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  mode: "no-cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const responseBody = (response) => response.data;

const requests = {
  get: (url, body, headers) =>
    instance.get(url, body, headers).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
};

export default requests;
