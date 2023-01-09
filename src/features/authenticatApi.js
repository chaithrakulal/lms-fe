import axios from "axios";

export const apiAuth = {
  getApiwithoutAuth: async (url) => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}${url}`);
  },
  postApiwithoutAuth: async (url, data) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}${url}`, {
      data: { ...data },
    });
  },
};
