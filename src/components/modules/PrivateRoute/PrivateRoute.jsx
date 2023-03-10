import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// import { isUserLogin } from "components/redux/selectors";

const PrivateRoute = () => {
    const {isLogin,token} = useSelector(({ auth }) => {
        const { isLogin, token } = auth;
        return { isLogin, token };
    });

    if (!isLogin && token) return <p>...Loading</p>;

    if (!isLogin && !token) return <Navigate to={"/login"} />;
    
    return <Outlet />;
};
export default PrivateRoute;