import { createContext, useEffect, useState } from "react";

export const globalUserContext = createContext();

const GlobalUserContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  console.log("userInfo", userInfo);
  useEffect(() => {
    const assignUserInfo = async () => {
      const response = JSON.parse(sessionStorage.getItem("userInfo"));
      setUserInfo(response);
    };
    assignUserInfo();
  }, []);
  return (
    <globalUserContext.Provider value={{ userInfo }}>
      {props.children}
    </globalUserContext.Provider>
  );
};

export default GlobalUserContextProvider;
