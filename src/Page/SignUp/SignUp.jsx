import React, { useState } from 'react'
import { FaClinicMedical, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router'
import GoogleSignUp from '../../Components/GoogleSignIn/GoogleSignUp'
import { useForm } from 'react-hook-form'
import useAuth from '../../hook/useAuth'

const SignUp = () => {
    const { createUser } = useAuth()

    const [showPass, setShowPass] = useState(false)

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    // Handle Register Function 
    const handleRegister = async (data) => {

        try {
            const userInfo = {
                name: data.fullName,
                image: data.Image,
                email: data.email,
                password: data.password

            }

            // create usser 
            const result = await createUser(userInfo.email, userInfo.password)
            console.log(result)
        }
        catch (er) {
            console.log(er.meeage)
        }
    }

    return (
        <div className=' flex flex-col justify-center '>

            <div className='space-y-2 text-center mt-20'>
                <h2 className='text-5xl font-semibold'>Let’s get started!</h2>
                <p>Create a new Anfra account</p>
            </div>

            {/* Registration Form */}
            <div className='my-10 md:w-1/3 w-full mx-auto'>
                <form onSubmit={handleSubmit(handleRegister)} className='flex flex-col justify-between gap-5'>
                    <div className='border border-gray-300 text-start p-3 rounded-md hover:border-primary duration-300'>
                        <label>Full Name</label> <br />
                        <input
                            {...register('fullName')}
                            className='border-0 outline-0 placeholder:text-sm' type="text"
                            placeholder='Enter Your Full Nmae' />
                    </div>

                    <div className='border border-gray-300 text-start p-3 rounded-md hover:border-primary duration-300'>
                        <label>Image</label> <br />
                        <input
                            {...register('Image')}
                            className='border-0 outline-0 placeholder:text-sm' type="file"
                            placeholder='Enter Your Full Nmae' />
                    </div>

                    <div className='border border-gray-300 text-start p-3 rounded-md hover:border-primary duration-300'>
                        <label>Email</label> <br />
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please enter a valid email'
                                }
                            })}
                            className='border-0 outline-0 placeholder:text-sm' type="email"
                            placeholder='Enter Your email' />
                        {errors.email && <p className='text-red-500 text-sm'> {errors.email.message} </p>}
                    </div>

                    <div className=' relative border border-gray-300 text-start p-3 rounded-md hover:border-primary duration-300'>
                        <label>Password</label> <br />
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                                    message: 'password must be at least 8 characters logn and contain at least one uppercase letter,one lowercase letter,one number and one special character'
                                }

                            })}
                            type={showPass ? 'text' : 'password'}
                            className='border-0 outline-0 placeholder:text-sm'
                            placeholder='Minimum 8 Character' />
                        {errors.password && <p className='text-red-500 text-sm'> {errors.password.message} </p>}


                        <div onClick={() => setShowPass(!showPass)} className='absolute top-7.5 right-2'>
                            {
                                showPass ? <FaRegEyeSlash /> : <FaRegEye />
                            }

                        </div>
                    </div>

                    <div>
                        <button className='btn bg-secondary text-white w-full hover:bg-primary'>Register</button>
                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <div className='h-0.5 md:w-10 bg-gray-300'></div>
                        <div>Or</div>
                        <div className='h-0.5 md:w-10 bg-gray-300'></div>
                    </div>

                    <div>
                        <GoogleSignUp />
                    </div>
                </form>
                <div className='my-5'> <p>Already have an account? <Link to={'/sign-in'} className='text-primary'>Login Now!</Link></p> </div>
            </div>
        </div>
    )
}

export default SignUp