import { useDispatch } from "react-redux";

import { RegisterMainDiv } from "./register.styled";
import { signUp } from "components/redux/auth/auth-operation";

import { Formik, Field, Form } from 'formik';
const initialValues = {
    name: '',
    email: '',
    password: '',
};
// const { name, email, password } = initialValues;

const Register = () => {
    const dispatch = useDispatch();

    const onSubmitSignup = ({ name, email, password }, actions) => {
        let personData = {name,email,password};
        // console.log(personData);

        dispatch(signUp(personData));
        actions.resetForm();
    }

    return (
        <RegisterMainDiv>
            <h2>Register Page</h2>

            <Formik onSubmit={onSubmitSignup} initialValues={initialValues}>
                <Form >
                    <div>
                        <label>Name</label>
                        <Field
                            // value={name} 
                            type="text"
                            name="name"
                            placeholder="input your name!"
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <Field
                            // value={email} 
                            type="mail"
                            name="email"
                            placeholder="input your email!"
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field
                            // value={password} 
                            type="password"
                            name="password"
                            placeholder="input your pasword!"
                            required
                        />
                    </div>

                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </RegisterMainDiv>
    )
};
export default Register;