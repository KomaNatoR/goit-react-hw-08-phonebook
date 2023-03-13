import { Field, ErrorMessage } from "formik"
import { useMemo } from "react";
import { nanoid } from "nanoid";

import { ErrField } from "./ErrorField";

const TextField = ({ label, name, ...props }) => {
    const id = useMemo(() => nanoid(), []);

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Field id={id} name={name} {...props}
                // value={name} 
                // type="text"
                // name="name"
                // placeholder="input your name!"
                // required
            />
            <ErrorMessage name={name} component={ErrField} />
        </div>
    )
};
export default TextField;