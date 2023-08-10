import React from "react";
import {useFormInput} from "./useFormInput.ts";

const Form: React.FC = () => {
    const firstNameProps = useFormInput('Mary');
    const lastNameProps = useFormInput('Poppins');

    return(
        <>
            <label>
                First name:
                <input {...firstNameProps} />
            </label>
            <br/>
            <label>
                Last name:
                <input {...lastNameProps} />
            </label>
            <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
        </>
    )
}

export default Form