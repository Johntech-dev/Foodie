import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { AuthContext } from '../contexts/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';


const Modal = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const {signUpWithGmail} = useContext(AuthContext);


    const handleGoogleLogin = () => {
      signUpWithGmail().then((result) => {
        const user = result.user;
   
        toast.success("Logged In successful", {
          position: "top-center"
        })
      }).catch((error) => toast.error("Check your internet connection", {
        position: "top-center"
      }))
    }

    // i commented out the function that handles the facebook and github login so i will be able to use it when i want 

    // const handleFacebookLogin = () =>  { 
    //   signUpWithFacebook().then((result) => {
    //     const user = result.user;
    //     const credential = FacebookAuthProvider.credentialFromResult(result);
    //     const accessToken = credential.accessToken;
    //     toast.success("Login sucessful !", {
    //       position: "top-center"
    //     });
    // }).then((error) => {
    //   toast.error("Login failed try again later !", {
    //     position: "top-center"
    //   });
    // })
    // }

    // const handleGithubLogin = () => {
    //    signUpWithGithub().then((result) => {
    //     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    //     const credential = GithubAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    
    //     // The signed-in user info.
    //     const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
        

    //     // This shows an alert if the user is login
    //     toast.success("User is signed in", {
    //       position: "top-center "
    //     })
    //   }).catch((error) => {
    //     toast.error("Login failed", { 
    //       position: "top-center"
    //     })
    //   })
    // }

      const onSubmit = (data) => console.log(data)

  return (
    <div>
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
  <div className="modal-box">
    <div className="modal-action flex flex-col justify-center  mt-0">

    <form  onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
        <h3 className='font-bold text-lg'>Login Into your account</h3>
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


          {/* Login button */}
        </div>
        <div className="form-control mt-6">
          <input type='submit' value='Login' className='btn bg-green text-white' />
        </div>
        <p className='text-center my-2'>Do not have an account?<Link to={'/Signup'} className='underline text-red ml-1'>Create an account</Link></p>
        <button 
        htmlFor='my_modal_5'
        onClick={()=>document.getElementById('my_modal_5').close()}
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
       {/* social sign in */}
      <div className='text-center space-x-3 mb-5'>
      <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handleGoogleLogin}>
      <FaGoogle />
     </button>       
      <button className="btn btn-circle hover:bg-green hover:text-white">
      <FaFacebook />
     </button>       
      <button className="btn btn-circle hover:bg-green hover:text-white">
      <FaGithub />
     </button>       
      </div>
      <ToastContainer />
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Modal