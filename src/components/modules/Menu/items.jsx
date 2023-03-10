import { nanoid } from "nanoid";

export const items = [
    {
        id: nanoid(),
        path: "/",
        text: "Menu",
        private: false,
    },
    {
        id: nanoid(),
        path: "/contacts",
        text: "Contacts",
        private: true,
    },
    // {
    //     id: nanoid(),
    //     path: "/register",
    //     text: "Register",
    // },
    // {
    //     id: nanoid(),
    //     path: "/login",
    //     text: "Login",
    // },
];