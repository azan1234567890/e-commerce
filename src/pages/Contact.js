import React from 'react'
import { Helmet } from 'react-helmet';
import Meta from '../component/Meta';
import BreadCrumbs from '../component/BreadCrumbs';
import {AiOutlineHome,AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall, BiInfoCircle } from "react-icons/bi"


const Contact = () => {
  return (
    <>
      <Helmet>
<Meta title={"Contact Us"} />
<title>Contact Us</title>
      </Helmet>
<BreadCrumbs title="Contact Us" />
<div className="content-wrapper home-wrapper-2 py-5">
  <div className="container">
    <div className="row">
      <div className="col-12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.994918447656!2d74.2956699146296!3d31.469325956810625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e287deb3d9%3A0xdc2277fb90c8e155!2sAptech%20Computer%20Education!5e0!3m2!1sen!2s!4v1675406164556!5m2!1sen!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="col-12 mt-5">
        <div className="contact-inner-wrapper d-flex justify-content-between">
          <div>
            <h3 className='contact-title mb-4'>Contact Us For Mor details</h3>
            <form action="" className='d-flex gap-15 flex-column'>
              <div>
                <input type="text" className='form-control' placeholder='Name' />
              </div>
              <div>
                <input type="text" className='form-control' placeholder='Email' />
              </div>
              <div>
                <input type="text" className='form-control' placeholder='Mobile Number' />
              </div>
              <div>
               <textarea className="form-control w-100"  cols="30" rows="4" placeholder='Enter Your Mind What you Think About this Website'></textarea>
              </div>
              <div>
                <button className='button border-0'>Submitt</button>
              </div>
            </form>
          </div>
          <div>
            <h3 className='contact-title mb-4'>Get InToch with Us</h3>
           <div>
            <ul className='ps-0'>
              <li className='mb-4 d-flex gap-15 align-items-center'><AiOutlineHome  className='fd-5 '/><address className='mb-0'>110 multan road</address></li>
              <li className='mb-4 d-flex gap-15 align-items-center'><BiPhoneCall className='fd-5 ' /><a href="tell:+923334490739" className='text-dark'>03334490739</a></li>
              <li className='mb-4 d-flex gap-15 align-items-center'><AiOutlineMail className='fd-5 ' /><a href="mailto:abd@gmail.com" className='text-dark'>abc@gmail.com</a></li>
              <li className='mb-4 d-flex gap-15 align-items-center'><BiInfoCircle className='fd-5 '/><p className='mb-0'>Monday to Friday</p></li>
            </ul>
           </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Contact
