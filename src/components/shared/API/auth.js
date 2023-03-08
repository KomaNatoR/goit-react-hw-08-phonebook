import axios from "axios";

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signUp = async (signData) => {
  // console.log(signData);
  const { data } = await instance.post("/users/signup", signData);
  return data;
};

export const logIn = async (signData) => {
  // console.log(signData);
  const { data } = await instance.post("/users/login", signData);
  return data;
};