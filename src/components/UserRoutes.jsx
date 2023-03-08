import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Register from "./modules/2Register/Register";
// import Login from "./modules/3Login/Login";
// import Contacts from "./modules/4Contacts/Contacts";

const MainPage = lazy(() => import("./modules/MainPage/MainPage"));
const Contacts = lazy(() => import("./modules/Contacts/Contacts"));
const Register = lazy(() => import("./modules/NavbarAuth/Register/Register"));
const Login = lazy(() => import("./modules/NavbarAuth/Login/Login"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p style={{ textAlign: "center", }}>...loading</p>}>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Suspense>
    )
};
export default UserRoutes;