// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signUp } from "components/redux/auth/auth-operation";
// import { getAuthError } from "components/redux/selectors";

import { RegisterMainDiv } from "./register.styled";

import { Formik, Form } from 'formik';
import { initialValues } from "./initialValues";
import { fields } from "./fields"
import TextField from "components/shared/TextField/TextField";
import Button from "components/shared/Button/Button";

const Register = () => {
    // const { status, statusText } = useSelector(getAuthError);
    // const errorMessage = useSelector(store => console.log(store.auth.error.data.message));
    const dispatch = useDispatch();

    const onSubmitSignup = ({ name, email, password }, actions) => {
        let personData = { name, email, password };
        console.log(personData);

        dispatch(signUp(personData));
        actions.resetForm();
    };

    return (
        <RegisterMainDiv>
            <h2>Register Page</h2>
            {/* {errorMessage && <p style={{color:"red"}}>{errorMessage}</p>} */}

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