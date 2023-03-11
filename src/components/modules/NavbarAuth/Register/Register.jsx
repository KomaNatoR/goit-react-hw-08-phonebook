// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
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
    // const [errState, setErrState] = useState("Sorry no token!");
    // const { status, statusText } = useSelector(getAuthError);
    // const regError = useSelector(store => store.auth.error);
    // if (errState !== regError) { setErrState(regError); };
    const dispatch = useDispatch();

    const onSubmitSignup = ({ name, email, password }, actions) => {
        let personData = { name, email, password };
        console.log("RegData:",personData);

        dispatch(signUp(personData));
        // actions.resetForm();
    };

    // useEffect(() => {
    //     setErrState("Sorry no token!");
    //     console.log("useEffect!!!");
    // }, []);

    // console.log("regError",regError);
    // console.log("errState:",errState);
    return (
        <RegisterMainDiv>
            <h2>Register Page</h2>
            {/* {regError!=="Sorry no token!" && <p style={{color:"red"}}>Pleace input correct data!</p>} */}

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