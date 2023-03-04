import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Register from "./modules/2Register/Register";
// import Login from "./modules/3Login/Login";
// import Contacts from "./modules/4Contacts/Contacts";

const Register = lazy(() => import("./modules/2Register/Register"));
const Login = lazy(() => import("./modules/3Login/Login"));
const Contacts = lazy(() => import("./modules/4Contacts/Contacts"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route path="/" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/contacts" element={<Contacts/>} />
            </Routes>
        </Suspense>
    )
};
export default UserRoutes;