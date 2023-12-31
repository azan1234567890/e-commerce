import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsChatLeftText, BsShop } from 'react-icons/bs'


const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 mb-3">
              <div className="footer-top-data d-flex gap-30 align items-center">
                <img src="images/newsletter.png" alt="" />
                <h2 className='m-0 text-white'>Sing Up For News Letter</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Enter-Your-Email" aria-label="Enter-Your-Email" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <span className="input-group-text h-100 p-2 bd-left" id="basic-addon2">
                    SubsCribe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'> 
      <div className="container">
        <div className="row">
          <div className="col-md-4 grid-mob">
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>110-main multan road near <br /> thoker niaz baig
                <br />
                pakistan: Punjab: Lahore
                <br />
                postCode: 58000
              </address>
              <a className='mt-4 d-block mb-2 text-white' href="tel:03334490739">03334490739</a>
              <a className='mt-2 d-block mb-2 text-white' href="mailto:">rajaazan918@gmail.com</a>
            </div>
          </div>
          <div className="col-md-3 grid-mob footer-left-side-content">
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white mb-1 py-2' to="/PrivacyPolicy">PrivacyPolicy</Link>
              <Link className='text-white mb-1 py-2' to="/ShippingPolicy">ShippingPolicy</Link>
              <Link className='text-white mb-1 py-2' to="/TermsandConditions">Terms and Conditions</Link>
              <Link className='text-white mb-1 py-2' to="/ReturnPolicy">Return Policy</Link></div>
          </div>
          <div className="col-md-3 grid-mob">
            <h4 className='text-white mb-4'>Account</h4>
            <div> <div className='footer-links d-flex flex-column'><Link className='text-white mb-1 py-2'>Watches</Link><Link className='text-white mb-1 py-2'>Laptops</Link><Link className='text-white mb-1 py-2'>Pc,s</Link><Link className='text-white mb-1 py-2'>Handfrees</Link></div></div>
          </div>
          <div className="col-md-2 grid-mob footer-left-side-content">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white mb-1 py-2'>Watches</Link>
              <Link className='text-white mb-1 py-2'>Laptops</Link>
              <Link className='text-white mb-1 py-2'>Computers</Link>
              <Link className='text-white mb-1 py-2'>Handfrees</Link></div>
          </div>
        </div>
      </div>
      </footer>
      <footer className='py-3 mob-bottom-margin'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 grid-mob">
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} All Rights Resevred @E-Commerce </p>
            </div>
            <div className='col-md-6 social_icons d-flex mt-2 align-items-center gap-4 grid-mob'>
              <a className='text-white' href=""><BsGithub className='text-white fs-5' /></a>
              <a className='text-white' href=""><BsLinkedin className='text-white fs-5' /></a>
              <a className='text-white' href=""><BsInstagram className='text-white fs-5' /></a>
              <a className='text-white' href=""><BsYoutube className='text-white fs-5' /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}



export default Footer;