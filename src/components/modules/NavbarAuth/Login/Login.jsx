import { useDispatch } from "react-redux";
import { logIn } from "components/redux/auth/auth-operation";

import { LoginMainDiv } from "./login.styled";

import { Formik, Form } from 'formik';
import { initialValues } from "./initialValues";
import { fields } from "./fields";
import TextField from "components/shared/TextField/TextField";
import Button from "components/shared/Button/Button";

const Login = () => {
    const dispatch = useDispatch();

    const onSubmitLogin = ({ email, password }, actions) => {
        let personData = { email, password };
        console.log("LoginData:",personData);

        dispatch(logIn(personData));
        actions.resetForm();
    };

    return (
        <LoginMainDiv>
            <h2>Login Page</h2>

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