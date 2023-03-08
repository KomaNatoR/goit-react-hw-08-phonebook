import { NavLink } from "react-router-dom";

const NavbarAuth = () => {
    return (
        <>
            <li>
                <NavLink to={"/register"}>Register</NavLink>
            </li>
            <li>
                <NavLink to={"/login"}>Login</NavLink>
            </li>           
        </>
    )
};
export default NavbarAuth;