import { Field } from "formik"
import { useMemo } from "react";
import { nanoid } from "nanoid";

const TextField = ({ label, ...props }) => {
    const id = useMemo(() => nanoid(), []);

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Field id={id} {...props}
                // value={name} 
                // type="text"
                // name="name"
                // placeholder="input your name!"
                // required
            />
        </div>
    )
};
export default TextField;