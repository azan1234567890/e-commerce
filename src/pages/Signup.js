import React from 'react'
import { Helmet } from 'react-helmet'
import Meta from '../component/Meta'

import { Link } from 'react-router-dom'

const Signup = () => {
  
  return (
    <>
    <Helmet>
    <Meta title={"Signup"} />
    <title>SignUp Page</title>
</Helmet>
<div className='Signup-wrapper home-wrapper-2 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='Signup-card shadow p-5 bg-light rounded'>
                                <h3 className='text-center'>SignUp</h3>
                                <form className='d-flex gap-15 flex-column'>
                                    
                                <div>
      <input  className='form-control' type="Email" name='Email' placeholder='Enter Your Email'/>
    </div>
    <div>
    <input  className='form-control' type="password" name='Password' placeholder='Password'/>
    </div>
    <div>
    <input  className='form-control' type="text" name='FullNmae' placeholder='Enter your FullName'/>
    </div>
    <div>
    <input  className='form-control' type="tel" name='Number' placeholder='Enter your Phone Number'/>
    </div>
    <div className='d-flex justify-content-center gap-20 align-items-center'>
                                            <button className='button border-0 mt-3' type='submit'>Create Account </button>
                                            <Link to="/Login" className='text-dark mt-3 btn btn-secondary'> Cancel</Link>
                                            
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

export default Signup
