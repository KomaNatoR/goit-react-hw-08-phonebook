import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { isUserLogin } from "components/redux/selectors";

const PublicRoute = () => {
    const isLogin = useSelector(isUserLogin);

    if (isLogin) return <Navigate to={"/contacts"} />;
    return <Outlet />;
};
export default PublicRoute;