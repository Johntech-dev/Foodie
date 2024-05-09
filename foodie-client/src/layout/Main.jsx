import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css'
import AuthProvider, { AuthContext } from '../contexts/AuthProvider'
import Loadingspinner from '../components/Loadingspinner'
const Main = () => {
  const {loading} = useContext(AuthContext)
  return (


   <div>
       {
        loading ? <Loadingspinner /> :  <div>
        <Navbar />
         <div className='min-h-screen'>
          <Outlet />
        </div>
      <Footer />
     </div>
       }
   </div>
  )
}

export default Main