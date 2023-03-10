import axios from "axios";

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
const setToken = token => {
  if (token) return instance.defaults.headers.authorization = `Bearer ${token}`;
  instance.defaults.headers.authorization = "";
}

export const signUp = async (signData) => {
  // console.log(signData);
  const { data } = await instance.post("/users/signup", signData);
  setToken(data.token);
  return data;
};

export const logIn = async (logData) => {
  // console.log(signData);
  const { data } = await instance.post("/users/login", logData);
  setToken(data.token);
  // console.log(data);
  return data;
};

export const getCurrentUser = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("/users/current");
    // console.log("getCurrentUser",data);
    return data;
  } catch (error) {
    // console.log("Error-API!!!",error);
    setToken();
    throw error;
  }
};

export const logOut = async (token) => {
  const { data } = await instance.post("/users/logout");
  setToken();
  return data;
};

export default instance;