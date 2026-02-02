import React from 'react'
import { Link } from 'react-router'
import GoogleSignUp from '../../Components/GoogleSignIn/GoogleSignUp'

const SignIn = () => {
  return (
    <div className=' flex flex-col justify-center '>
        <div className='space-y-2 text-center mt-20'>
            <h2 className='text-5xl font-semibold'>Welcome to QuickMed</h2>
            <p>Login Now & Continue Your Journey</p>
        </div>

          {/* Login Form */}
        <div className='my-10 md:w-1/3 w-full mx-auto'>
            <form className='flex flex-col justify-between gap-5'>


                <div className='border border-gray-300 text-start p-3 rounded-md'>
                    <label>Email</label> <br />
                    <input className='border-0 outline-0 placeholder:text-sm' type="email" placeholder='Enter Your email'/>
                </div>

                <div className='border border-gray-300 text-start p-3 rounded-md'>
                    <label>Password</label> <br />
                    <input className='border-0 outline-0 placeholder:text-sm' type="password" placeholder='Minimum 8 Character'/>
                </div>

                <div>
                    <button className='btn bg-secondary text-white w-full' type="submit">Login</button>
                </div>

                <div className='flex items-center justify-center gap-2'>
                    <div className='h-0.5 md:w-10 bg-gray-300'></div>
                    <div>Or</div>
                    <div className='h-0.5 md:w-10 bg-gray-300'></div>
                </div>

                <div>
                    <GoogleSignUp/>
                </div>
            </form>
            <div className='my-5'> <p>You Dont't have an account? <Link to={'/sign-up'} className='text-primary'>Registration Now</Link></p> </div>
        </div>
    </div>
  )
}

export default SignIn