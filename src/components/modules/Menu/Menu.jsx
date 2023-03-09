import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserLoading } from "components/redux/selectors";

import { MenuMainDiv } from "./menu.styled";
import { items } from "./items";

import NavbarAuth from "../NavbarAuth/NavbarAuth";
import NavbarUser from "../NavbarUser/NavbarUser";

const Menu = () => {
    const ele = items.map(({ id, path, text }) => (
        <li key={id}>
            <NavLink to={path}>{text}</NavLink>
        </li>)
    );
    const isLogin = useSelector(isUserLoading);
    // console.log(isLogin);

    return (
        <MenuMainDiv>
            <ul>
                {ele}
                {!isLogin && <NavbarAuth />}
                {isLogin && <NavbarUser />}
            </ul>
        </MenuMainDiv>
    )
};
export default Menu;