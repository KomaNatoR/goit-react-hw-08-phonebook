import { NavLink } from "react-router-dom";

import { MenuMainDiv } from "./menu.styled";
import { items } from "./items";

const Menu = () => {
    const ele = items.map(({ id, to, text }) => (
        <li key={id}>
            <NavLink to={to}>{text}</NavLink>
        </li>)
    );

    return (
        <MenuMainDiv>
            <ul>
                {ele}
            </ul>
        </MenuMainDiv>
    )
};
export default Menu;