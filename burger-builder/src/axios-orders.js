import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-78d7a.firebaseio.com/",
});

export default instance;
