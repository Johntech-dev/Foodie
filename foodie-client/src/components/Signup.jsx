import React, { useContext, useState } from 'react'
import Modal from './Modal'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {

  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const location = useLocation();
  const navigate = useNavigate();
  
  const from = location.state?.from?.pathname || "/";


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const email = data.email
    const password = data.password

    createUser(email, password).then((result) => {
      const user = result.user;
      navigate(from, {replace: true})
      setSuccessMessage("Your account has been successfully created")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      setErrorMessage("We are unable to create an account for you at the moment please check your internet connection")
      // ..
    });
  }


  const {createUser} = useContext(AuthContext)
  return (
    <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20 rounded-sm'>
    <div className="modal-action flex flex-col justify-center  mt-0">
      <ToastContainer />
    <form  onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
        <h3 className='font-bold text-lg'>Create Account</h3>
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" 
          placeholder="email" 
          className="input input-bordered" 
          required
          {...register("email")}
          />
        </div>
        {/* password */}
        <div className="form-control">
          <label className="label mt-1">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
          placeholder="password" 
          className="input input-bordered" 
          required
          {...register("password")}
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          
         {/*  error */}
              
         {
                errorMessage ? <p className='text-red text-xs italic'>{errorMessage}</p> : ""
              }
               {
                successMessage ? <p className='text-green text-xs italic'>{successMessage}</p> : ""
              }

          {/* Login button */}
        </div>
        <div className="form-control mt-6">
          <input type='submit' value='Create Account' className='btn bg-green text-white' />
        </div>
        <p className='text-center my-2'>Already have an account?<button onClick={()=>document.getElementById('my_modal_5').showModal()} className='underline text-red ml-1'>Login now</button>
        <Modal />
        </p>
        <Link to={'/'}
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      </form>
       {/* social sign in */}
      <div className='text-center space-x-3 mb-5'>
      <button className="btn btn-circle hover:bg-green hover:text-white">
      <FaGoogle />
     </button>       
      <button className="btn btn-circle hover:bg-green hover:text-white">
      <FaFacebook />
     </button>       
      <button className="btn btn-circle hover:bg-green hover:text-white">
      <FaGithub />
     </button>       
      </div>
    </div>
    </div>
  )
}

export default Signup;