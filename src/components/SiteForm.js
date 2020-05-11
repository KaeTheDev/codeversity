import React, { Component } from 'react'
// import { Container, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class SiteForm extends Component {
   render() {
        return (
            <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
               
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string()
                    .required('First Name cannot be empty'),
                lastName: Yup.string()
                    .required('Last Name cannot be empty'),
                email: Yup.string()
                    .email('Looks like this is not an email')
                    .required('Email is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password cannot be empty')
        
            })}
            onSubmit={fields => {
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
            render={({ errors, status, touched }) => (
                <Form className="form">
                    <div className="form-group">
                        <Field name="firstName" placeholder = "First Name" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <Field name="lastName" placeholder="Last Name" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                        <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <Field name="email" placeholder="Email Address" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <Field name="password" placeholder = "Password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </div>
                
                    <div className="form-group">
                    <button className ="btn btn-primary btn-lg btn-block">CLAIM YOUR FREE TRIAL</button>
                    </div>
                    <div className ="terms-of-service">
                <p>By clicking the button, you are agreeing to our <span id="terms"><b>Terms of Service</b></span></p>
            </div>
                </Form>
            )}
        />
    )
}
}
    
            
export default SiteForm

