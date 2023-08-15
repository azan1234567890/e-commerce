import React from 'react'
import { Helmet } from 'react-helmet'
import Meta from '../component/Meta'
import BreadCrumbs from '../component/BreadCrumbs'
import { Link } from 'react-router-dom'

const Resetpassword = () => {
  return (
    <>
    <Helmet>
                 <Meta title={"Resetpassord"} />
                 <title>ResetPassword</title>
             </Helmet>
             <BreadCrumbs title="Resetpassword" />
             <div className='login-wrapper home-wrapper-2 py-5'>
                 <div className='container'>
                     <div className='row'>
                         <div className='col-12'>
                             <div className='login-card shadow p-5 mb-5 bg-white '>
                                 <h3 className='text-center'>Reset Password</h3>
                                 <form className='d-flex gap-15 flex-column'>
                                    
                                    <div>
                                         <input  className='form-control' type="password" name='Email' placeholder='Password'/>
                                     </div>
                                    <div>
                                         <input  className='form-control' type="password" name='Confirmpassword' placeholder='Confirm Password'/>
                                     </div>
                                     <div>
                                         
                                         <div className='d-flex justify-content-center gap-20 align-items-center'>
                                            <Link to={"/Login"}> <button className='button border-0 mt-3'>OK</button></Link>
                                             
                                         </div>
                                     </div>
                                 </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
    </>
  )
}

export default Resetpassword
