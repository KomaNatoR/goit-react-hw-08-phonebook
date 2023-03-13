import { useDispatch, useSelector } from "react-redux";

import { logOutUser } from "components/redux/auth/auth-operation";
import { ProfileMainDiv } from "./profilePage.styled";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const {name,email} = useSelector(({ auth }) => auth.user);
    // console.log(userData);
    
    const onLogOut = () => {
        console.log("Logout Click!");
        dispatch(logOutUser());
    };
    return (
        <ProfileMainDiv>
            {/* <img src="" alt="" /> */}
            <div></div>
            <h2>{name}</h2>
            <p>{email}</p>
            <button type="button" onClick={onLogOut}>Log out</button>
        </ProfileMainDiv>
    )
};
export default ProfilePage;