import { apiAuth } from "../../authenticatApi";
import { url } from "./UrlVariable";

export const ApiHanlder = {
  authenticateLogin: async (username, password) => {
    try {
      const response = await apiAuth.getApiwithoutAuth(
        url.LoginValidate(username, password)
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};
