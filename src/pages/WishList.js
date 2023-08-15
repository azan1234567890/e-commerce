import React from 'react'
import { Helmet } from 'react-helmet'
import Meta from '../component/Meta'
import BreadCrumbs from '../component/BreadCrumbs'

const WishList = () => {
  return (
    <>
    <Helmet>
              <Meta title={"wishlist"} />
              <title>Wishlist</title>
          </Helmet>
          {/* <BreadCrumbs title="wishlist" /> */}
          <div className='wishlist-wrapper home-wrapper-2 py-5'>
              <div className='container'>
                  <div className='row'>
                      <div className='col-3'>
                          <div className='wishlist-card position-relative'>
                          <img className='position-absolute cross img-fluid' src='images/cross.svg' alt=''/>
                              <div className='wishlist-card-image'>
                              <img className='img-fluid w-100' src='images/watch-1.png' alt=''/>
                              </div>
                              <div className='py-3 px-3'>
                                  <h5 className='title'>Rollex 2023</h5>
                                  <h6 className='price'>$500</h6>

                              </div>
                          </div>
                      </div>
<div className='col-3'>
                          <div className='wishlist-card position-relative'>
                          <img className='position-absolute cross img-fluid' src='images/cross.svg' alt=''/>
                              <div className='wishlist-card-image'>
                              <img className='img-fluid w-100' src='images/watch-2.jpg' alt=''/>
                              </div>
                              <div className='py-3 px-3'>
                                  <h5 className='title'>Rollex 2023</h5>
                                  <h6 className='price'>$500</h6>

                              </div>
                          </div>
                      </div>
<div className='col-3'>
                          <div className='wishlist-card position-relative'>
                          <img className='position-absolute cross img-fluid' src='images/cross.svg' alt=''/>
                              <div className='wishlist-card-image'>
                              <img className='img-fluid w-100' src='images/watch-3.png' alt=''/>
                              </div>
                              <div className='py-3 px-3'>
                                  <h5 className='title'>Rollex 2023</h5>
                                  <h6 className='price'>$500</h6>

                              </div>
                          </div>
                      </div>
<div className='col-3'>
                          <div className='wishlist-card position-relative'>
                          <img className='position-absolute cross img-fluid' src='images/cross.svg' alt=''/>
                              <div className='wishlist-card-image'>
                              <img className='img-fluid w-100' src='images/watch-2.jpg' alt=''/>
                              </div>
                              <div className='py-3 px-3'>
                                  <h5 className='title'>Rollex 2023</h5>
                                  <h6 className='price'>$500</h6>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  </>
)
}
  


export default WishList
