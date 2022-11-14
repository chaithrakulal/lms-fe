import axios from "axios";

export const apiAuth = {
  getApiwithoutAuth: async (url) => {
    console.log("url", process.env.REACT_APP_BASE_URL);
    console.log("port ", process.env.PORT);
    return axios.get(`${process.env.REACT_APP_BASE_URL}${url}`);
  },
};
