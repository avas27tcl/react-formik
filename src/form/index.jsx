import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormTemplate = () => {
    const initialValues = {
        // keys should be same as the Field names
        email: '',
        fullname: '',
        address: ''
    };

    const onSubmit = (formData) => {
        console.log(formData)
    };

    const validation = (formData) => {
        // initialise an empty object for array
        const errors = {}

        // use field name as key here
        if (!formData.email) {
            errors.email = "Email is required."
        }

        if (!formData.fullname) {
            errors.fullname = "Full name is required."
        }

        if (!formData.address) {
            errors.address = "Address is required."
        }

        return errors;
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validation}>
            <Form className="container">
                <div className="form-control">
                    <label for="email">Email:</label>
                    <Field name="email" id="email"></Field>
                    <div className="error">
                        <ErrorMessage name="email" />
                    </div>
                </div>
                <div className="form-control">
                    <label for="fullname">Full Name:</label>
                    <Field name="fullname" id="fullname"></Field>
                    <div className="error">
                        <ErrorMessage name="fullname" />
                    </div>
                </div>
                <div className="form-control">
                    <label for="address">Address:</label>
                    <Field name="address" id="address"></Field>
                    <div className="error">
                        <ErrorMessage name="address" />
                    </div>
                </div>
                <div className="btn-wrap">
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default FormTemplate;
