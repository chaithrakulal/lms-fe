export const url = {
  LoginValidate: (username, password) =>
    `/users?username=${username}&password=${password}`,
  addLeaveEntry: () => `/users/create`,
};
