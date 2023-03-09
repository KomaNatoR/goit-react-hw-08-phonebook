import { useDispatch, useSelector } from "react-redux";
import { signUp } from "components/redux/auth/auth-operation";
import { isUserLoading, getAuthError } from "components/redux/selectors";
import { Navigate } from "react-router-dom";

import { RegisterMainDiv } from "./register.styled";

import { Formik, Form } from 'formik';
import { initialValues } from "./initialValues";
import { fields } from "./fields"
import TextField from "components/shared/TextField/TextField";
import Button from "components/shared/Button/Button";;
// const { name, email, password } = initialValues;

const Register = () => {
    const isLogin = useSelector(isUserLoading);
    const {status, statusText} = useSelector(getAuthError);
    const dispatch = useDispatch();

    const onSubmitSignup = ({ name, email, password }, actions) => {
        let personData = { name, email, password };
        console.log(personData);

        dispatch(signUp(personData));
        actions.resetForm();
    };

    if (isLogin) return <Navigate to={"/contacts"} />;

    return (
        <RegisterMainDiv>
            <h2>Register Page</h2>
            {status && <p style={{color:"red"}}>{statusText}</p>}

            <Formik onSubmit={onSubmitSignup} initialValues={initialValues}>
                <Form >
                    <TextField {...fields.name} />
                    <TextField {...fields.email} />
                    <TextField {...fields.password} />

                    <Button>Register</Button>
                </Form>
            </Formik>
        </RegisterMainDiv>
    )
};
export default Register;