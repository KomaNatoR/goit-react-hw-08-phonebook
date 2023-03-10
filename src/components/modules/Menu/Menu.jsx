import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserLogin } from "components/redux/selectors";

import { MenuMainDiv } from "./menu.styled";
import { items } from "./items";

import NavbarAuth from "../NavbarAuth/NavbarAuth";
import NavbarUser from "../NavbarUser/NavbarUser";

const Menu = () => {
    const isLogin = useSelector(isUserLogin);
    const filtredPrivateRoutes = !isLogin ? items.filter(item =>!item.private) : items;
    

    const ele = filtredPrivateRoutes.map(({ id, path, text }) => (
        <li key={id}>
            <NavLink to={path}>{text}</NavLink>
        </li>)
    );
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