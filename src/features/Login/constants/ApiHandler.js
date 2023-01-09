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
  addLeaveEntry: async (userid, startdate, endDate, reason) => {
    try {
      const response = await apiAuth.postApiwithoutAuth(
        url.addLeaveEntry(),
        userid,
        startdate,
        endDate,
        reason
      );
    } catch (error) {
      throw error;
    }
  },
};
