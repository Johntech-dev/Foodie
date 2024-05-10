import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data, event) => {
        const email = data.email;
        event.preventDefault(); // Prevent default form submission behavior
        handleResetPassword(data.email);
      }

      const {Resetpassword, user} = useContext(AuthContext);


      const handleResetPassword = (email) => {
        Resetpassword(email).then(() => {
           setSuccessMessage("Password reset email sent")
        })
        .catch((error) => {
          setErrorMessage("Invalid address")
        });
      
      }
  return (
    <div>
        
        <div className="max-w-md bg-white shadow w-full mx-auto flex items-center mt-60      justify-center my-20">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
            <h3 className="font-bold text-lg text-green">Reset Password</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>

            {
              successMessage ? <p className='text-green italic text-xs'>{successMessage}</p> : ""
            }
      
            {
                errorMessage ? <p className='text-red italic text-xs'>{errorMessage}</p> : ""
            }
            <div className="form-control mt-4">
              <input
                type="submit"
                value="Reset Password"
                className="btn bg-green text-white"
                // onClick={handleResetPassword}
              />
            </div>
            <Link
            to="/signup"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</Link>
</form>
</div>
</div>
    </div>
  )
}

export default ForgotPassword