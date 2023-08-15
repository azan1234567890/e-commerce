import React from 'react'
import { Helmet } from 'react-helmet'
import Meta from '../component/Meta'
import BreadCrumbs from '../component/BreadCrumbs'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <>
   <Helmet>
                <Meta title={"login"} />
                <title>Login</title>
            </Helmet>
            <BreadCrumbs title="login" />
            {/* <div className='login-navbar py-4 '>
      <div className="container">
        <div className="row ">
            <div className="col-12 d-flex ">
              
            <h1 className='d-flex pt-5 Logincontent'>Welcome To Our Login Page</h1>
            </div>
          
        </div>
      </div>
    </div> */}
            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card shadow'>
                                <h3 className='text-center'>Login</h3>
                                <form className='d-flex gap-15 flex-column'>
                                    <div> 

                                        <input  className='form-control' type="Email" name='Email' placeholder='Enter Your Email'/>
                                    </div>
                    <div>
                                        <input  className='form-control' type="Email" name='Email' placeholder='Password'/>
                                    </div>
                                    <div>
                                        <Link to="/Forgetpassword" className='text-dark'>Forgot Password? </Link>
                                        <div className='d-flex justify-content-center gap-20 align-items-center'>
                                            <button className='button border-0 mt-3'>Login </button>
                                            <Link className='button-2 signup border-0 mt-3' to="/Signup">Sign Up</Link>
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

export default Login
