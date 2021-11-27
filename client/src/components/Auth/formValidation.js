import React from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';

var SignupSchema = yup.object().shape({
    firstName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    lastName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    email: yup.string().required("Required").email("invalid email").max(255),
    password: yup.string().required("Required").min(6, "password should be at least 6 characters"),
    confirmPassword: yup.string().required("Required").min(6, "password should be at least 6 characters"),
});
import React from 'react'

function formValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    
    return (
        <div>
            
        </div>
    )
}

export default formValidation
