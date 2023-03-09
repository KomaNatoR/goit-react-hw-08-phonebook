import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { currentUser } from "./redux/auth/auth-operation";

import Menu from "./modules/Menu/Menu";
import UserRoutes from "./UserRoutes";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Menu />
      
      <UserRoutes />
    </>
  );
};


