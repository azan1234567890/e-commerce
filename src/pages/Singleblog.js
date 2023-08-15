import React from 'react'
import { Helmet } from 'react-helmet'
import Meta from '../component/Meta'
import {HiOutlineArrowLeft}from 'react-icons/hi'
import BreadCrumbs from '../component/BreadCrumbs'
import { Link } from 'react-router-dom'

const Singleblog = () => {
    
  return (
    <>
    <Helmet>
                 <Meta title={"Resetpassord"} />
                 <title>Dynamic blog Name </title>
             </Helmet>
             <BreadCrumbs title="Dynamic blog Name" />
             <div className="blog-wrapper home-wrapper-2 py-5">
    <div className="container">
        <div className="row">
           <div className="col-12">
            <div className="single-blog-card">
                <Link to='/Blog' className='d-flex align-items-center col-2 gap-10'><HiOutlineArrowLeft className='fs-3'/> Go Back To Blogs</Link>
                <h3 className="title">Beautiful Sunday Morning</h3>
                <img src="/images/blog-1.jpg" alt="" className='img-fluid w-100 my-4' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla reprehenderit expedita vitae veritatis impedit velit? Quo facere assumenda explicabo. Quidem sunt ipsa qui totam doloribus voluptates aspernatur, aliquid libero, nemo perferendis enim a voluptatibus, nostrum pariatur voluptas beatae? Animi cum quidem vitae perspiciatis magnam dicta, asperiores hic quia dolores ad.</p>
            </div>
           </div>
        </div>
    </div>
</div>
             
    </>
  )
}

export default Singleblog
