import { useDispatch, useSelector } from "react-redux";
import { logIn } from "components/redux/auth/auth-operation";
import { isUserLoading } from "components/redux/selectors";
import { Navigate } from "react-router-dom";

import { LoginMainDiv } from "./login.styled";

import { Formik, Form } from 'formik';
import { initialValues } from "./initialValues";
import { fields } from "./fields";
import TextField from "components/shared/TextField/TextField";
import Button from "components/shared/Button/Button";

const Login = () => {
    const isLogin = useSelector(isUserLoading);
    const dispatch = useDispatch();

    const onSubmitLogin = ({ email, password }, actions) => {
        let personData = { email, password };
        console.log(personData);

        dispatch(logIn(personData));
        actions.resetForm();
    };

    if (isLogin) return <Navigate to={"/contacts"} />;

    return (
        <LoginMainDiv>
            <h2>Register Page</h2>

            <Formik onSubmit={onSubmitLogin} initialValues={initialValues}>
                <Form >
                    <TextField {...fields.email} />
                    <TextField {...fields.password} />

                    <Button>Login</Button>
                </Form>
            </Formik>
        </LoginMainDiv>
    )
};
export default Login;