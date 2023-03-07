import { useDispatch } from "react-redux";

import { RegisterMainDiv } from "./register.styled";
import { signUp } from "components/redux/auth/auth-operation";

import { Formik, Form } from 'formik';
import TextField from "components/shared/TextField/TextField";
import Button from "components/shared/Button/Button";
import { initialValues } from "./initialValues";
import { fields } from "./fields";
// const { name, email, password } = initialValues;

const Register = () => {
    const dispatch = useDispatch();

    const onSubmitSignup = ({ name, email, password }, actions) => {
        let personData = {name,email,password};
        console.log(personData);

        dispatch(signUp(personData));
        actions.resetForm();
    }

    return (
        <RegisterMainDiv>
            <h2>Register Page</h2>

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