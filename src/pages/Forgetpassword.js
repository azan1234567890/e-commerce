import React from 'react'
import { Helmet } from 'react-helmet'
import Meta from '../component/Meta'
import BreadCrumbs from '../component/BreadCrumbs'
import { Link } from 'react-router-dom'
const Forgetpassword = () => {
  return (
    <>
      <Helmet>
                <Meta title={"login"} />
                <title>Login</title>
            </Helmet>
            {/* <BreadCrumbs title="login" /> */}
            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card'>
                                <h3 className='text-center'>Reset Your Password</h3>
                                <p className='text-center mt-2 mb-3'>We sent you an email to reset your password</p>
                                <form className='d-flex gap-15 flex-column'>
                                    <div> 

                                        <input  className='form-control' type="Email" name='Email' placeholder='Enter Your Email'/>
                                    </div>
                  
                                    <div>
                                        
                                        <div className='d-flex justify-content-center gap-20 align-items-center'>
                                            <button className='button border-0 mt-3' type='submit'>Login </button>
                                            <Link to="/Login" className='text-dark'> Cancel</Link>
                                            
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

export default Forgetpassword
