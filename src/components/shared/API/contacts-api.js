// import axios from "axios";
import instance from "./auth";

// const instance = axios.create({
//   baseURL: 'https://63fdc6af1626c165a09f5678.mockapi.io/api/contacts',
// });

export const getContacts = async () => {
    const { data } = await instance.get("/contacts");
    return data; 
};

export const addContact = async (dataOfContact) => {
    // console.log(dataOfContact);
    const { data } = await instance.post("/contacts", dataOfContact);
    // console.log(data);
    return data;
};

export const deleteContact = async (id) => {
    const { data } = await instance.delete(`/contacts/${id}`);
    return data;
};