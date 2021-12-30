import React from 'react'
import  ReactDom  from 'react-dom'
import { Formik, Form } from 'formik'
import InputField from '../shared/InputField'
import * as Yup from "yup"
import usePassword from '../shared/usePassword'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons' 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
library.add(fab)

const Login = ({open, onClose}) => {
    const validate = Yup.object({
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
        remember: Yup.bool()
    })
    const [PassInputType, ToggleIcon] = usePassword();
    if (!open) return null
    return ReactDom.createPortal (
        <Formik
        initialValues={{
            email: '',
            password: '',
            remember: false,
        }}
        validationSchema={validate}
        onSubmit={values => {
            console.log(values)
        }}
        >
            {formik => (
                <div className='w-full h-screen flex items-center justify-center bg-black bg-opacity-50 fixed top-0 z-40'>
                    <div className='flex items-center flex-col w-96 py-6 rounded-3xl bg-signup text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                        <div className=' text-xl w-full text-right pr-7 cursor-pointer' onClick={onClose}>x</div>
                        <h1 className=' text-3xl mx-16 font-bold mb-4'>Welcome back !</h1>
                        <Form className=' w-full flex flex-col items-center px-16'>
                            <InputField label="Email adress" name="email" type="email" />
                            <InputField label="Password" name="password" type={PassInputType} ToggleIcon={ToggleIcon} />
                            <button className='text-white bg-tc-purple-d rounded-3xl py-1 my-3 px-16' type='submit'>
                                <Link to="../profil">Register</Link>
                            </button>
                        </Form>
                        <div className='flex items-center justify-between w-full px-20 py-3 mt-3'>
                            <div className=' text-xs'>Forgot Password?</div>
                            <div className=' text-sm cursor-pointer'>Reset password</div>
                            
                        </div>
                        <div className='flex justify-center relative w-full mt-6'>
                            <div className='relative z-10 px-3 bg-signup'>or use this to login</div>
                            <div className='absolute w-full h-small z-0 bg-white top-1/2'></div>
                        </div>
                        <div className='w-full flex items-center justify-evenly cursor-pointer pt-4 pb-2'>
                            <FontAwesomeIcon icon={["fab","facebook"]} className='text-4xl' />
                            <FontAwesomeIcon icon={["fab","google"]} className='text-4xl' />

                        </div>
                    
                    </div>
                </div>
            )}
            

        </Formik>,
        document.getElementById("popup")
    )
}

export default Login
