import { NavLink, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getUser } from "components/redux/selectors";
import { logOutUser } from "components/redux/auth/auth-operation";

const NavbarUser = () => {
    const dispatch = useDispatch();
    const { name = "No data" } = useSelector(getUser);
    
    const onLogOut = () => {
        console.log("Hello!");
        dispatch(logOutUser());
    };

    return (
        <>
            <li>
                <NavLink to={"/contacts"}>{name}</NavLink>
            </li>
            <li>
                <Link to={"/contacts"} onClick={onLogOut}>Log out</Link>
            </li>
        </>
    )
};
export default NavbarUser;