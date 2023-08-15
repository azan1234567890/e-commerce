import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = (props) => {
    const{title}=props
  return (
    <div className='breadcrumb py-4 '>
      <div className="container">
        <div className="row ">
            <div className="col-12">
                <p><Link to='/' className='text-dark'>Home </Link>  /{title}</p>
                
            </div>
            {/* <div className="col-4">
            <h1 className='d-flex pt-5 boldheading'>Welcome To Our Store</h1>

            </div>
            <div className="col-4"></div> */}
        </div>
      </div>
    </div>
  )
}

export default BreadCrumbs
