import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("https://dummyjson.com/products");
  }
  getProductsByName(productName) {
    return axios.get(`https://dummyjson.com/products/search?q=${productName}`);
  }
}
