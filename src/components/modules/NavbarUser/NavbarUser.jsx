import { NavLink } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { getUser } from "components/redux/selectors";

const NavbarUser = () => {
    // const { name="No data" } = useSelector(getUser);

    return (
        <>
            <li>
                <NavLink to={"/contacts"}>User</NavLink>
            </li>
            <li>
                <NavLink to={"/"}>Log out</NavLink>
            </li>
        </>
    )
};
export default NavbarUser;