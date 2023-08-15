import React from 'react'
import { Helmet } from 'react-helmet'
import Meta from '../component/Meta'
import BreadCrumbs from '../component/BreadCrumbs'
import { Link } from 'react-router-dom'
import ProductCard from '../component/ProductCard'
import ReactStars from 'react-rating-stars-component'
import { useState } from 'react'
const SingleProduct = () => {
    const grid=3
    const[orderedproduct,setorderedproduct]=useState(true);
  return (
   <>
    <Helmet>
                <Meta title={"SingleProduct"} />
                <title>SingleProduct</title>
            </Helmet>
            <BreadCrumbs title="SingleProduct" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className="discription-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">

                            <h4>Discription</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ad quas quasi a minima quaerat! Iusto, ratione! Eius sed suscipit quod impedit quo est labore, culpa non debitis perspiciatis aut.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-inner-wrapper">

                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className="d-flex align-items-center gap-10">

                                    <ReactStars
                                         count={5}
                                         size={24}
                                         value="3"
                                         edit={false}
                                         activeColor="#ffd700"
                                         />
          <p className='mb-0'>Based on Three Reviews</p>
                                    </div>
                                </div>
                                {orderedproduct && <div>
                                    <a href="" className='text-dark text-decoration-underline'>Write A Review</a>
                                </div>}
                            </div>
                                
                                         </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper py-5 home-wrapper-2 '>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            
            <ProductCard grid={grid}/>
            
          </div>
          
        </div>
      </section>
   </>
  )
}

export default SingleProduct
