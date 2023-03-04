import { nanoid } from "nanoid";

export const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Register",
    },
    {
        id: nanoid(),
        to: "/login",
        text: "Login",
    },
    {
        id: nanoid(),
        to: "/contacts",
        text: "Contacts",
    },
];