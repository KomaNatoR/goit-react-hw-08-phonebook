import { NavLink } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";
// import { getUser } from "components/redux/selectors";
// import { logOutUser } from "components/redux/auth/auth-operation";

const NavbarUser = () => {
    // const dispatch = useDispatch();
    // const { name = "No data" } = useSelector(getUser);
    
    // const onLogOut = () => {
    //     console.log("Logout Click!");
    //     dispatch(logOutUser());
    // };

    return (
        <>
            {/* <li>
                <NavLink to={"/contacts"}>{name}</NavLink>
            </li> */}
            <li>
                <NavLink to={"/profile"}>Profile</NavLink>
            </li>
            {/* <li>
                <Link to={"/contacts"} onClick={onLogOut}>Log out</Link>
            </li> */}
        </>
    )
};
export default NavbarUser;