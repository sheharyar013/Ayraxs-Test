import requests from "./httpService";

const Servers = {
  getProducts() {
    return requests.get(`/posts`);
  },
  addProduct(body) {
    return requests.post(`/posts`, body);
  },
};

export default Servers;
