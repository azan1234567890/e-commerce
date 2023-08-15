import React from 'react'
import BreadCrums from '../component/BreadCrumbs'
import { Helmet } from 'react-helmet';
import Meta from '../component/Meta';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductCard from '../component/ProductCard';
import Colors from '../component/Colors';


const OurStore = () => {
  const [grid, setgrid] = useState(4);

  return (
    <>
      <Helmet>
        <Meta title={'Our Store'} />
        <title>Our Store</title>
      </Helmet>

      <BreadCrums title='Our Store' />
      <div className="store-wrapper">
        <div className="home-wrapper-2 py-5">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className='filter-card mb-3'>
                  <h3 className='filter-title'>Shop By catagories</h3>
                  <div>
                    <ul className='ps-0'>
                      <li>TV</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                      <li>Radio</li>
                    </ul>
                  </div>
                </div>
                <div className='filter-card mb-3'>
                  <h3 className='filter-title'>Filter Buy</h3>
                  <div >
                    <h5 className='sub-title'>Availabity</h5>
                  </div>

                  <div className='form-check'>
                    <input type="checkbox" className='form-check-input' />
                    <label htmlFor="" className='form-check-label'>
                      In Stock(1)
                    </label>
                  </div>

                  <div className='form-check'>
                    <input type="checkbox" className='form-check-input' />
                    <label htmlFor="" className='form-check-label'>
                      Out OF Stock(0)
                    </label>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>

                    <div className="form-floating ">
                      <input type="number" placeholder='Koch' id='floating-input' className='form-control' />
                      <label htmlFor="floating-input">From</label>
                    </div>
                    <div className="form-floating ">
                      <input type="number" placeholder='Koch' id='floating-input' className='form-control' />
                      <label htmlFor="floating-input">To</label>
                    </div>

                  </div>
                  <h5 className='sub-title'>Colors</h5>
                  <div>
                    <div className="d-flex flex-wrap">
                      <ul className='colors ps-0'>
                        <Colors />
                      </ul>
                    </div>
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    <div className='form-check'>
                      <input type="checkbox" id='color-1' className='form-check-input' />
                      <label htmlFor="color-1" className='form-check-label'>
                        S(2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input type="checkbox" id='color-2' className='form-check-input' />
                      <label htmlFor="color-2" className='form-check-label'>
                        M(2)
                      </label>
                    </div>
                  </div>
                </div>
                <div className='filter-card mb-3'>
                  <h3 className='filter-title'>Title Products Tag</h3>
                  <div>
                    <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                      <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphones</span>
                      <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                      <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                      <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Watch</span>
                    </div>
                  </div>
                </div>
                <div className='filter-card mb-3'>
                  <h3 className='filter-title'>Title Random Product</h3>
                  <div>
                    <div className="random-products d-flex mb-3">
                      <div className="w-50">
                        <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                      </div>
                      <div className="w-50">
                        <h5>This Watch balke jo marzi lekh do</h5>
                        <ReactStars
                          count={5}
                          size={20}
                          value="3"
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b>$100</b>
                      </div>
                    </div>
                    <div className="random-products d-flex mb-3">
                      <div className="w-50">
                        <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                      </div>
                      <div className="w-50">
                        <h5>This Watch balke jo marzi lekh do</h5>
                        <ReactStars
                          count={5}
                          size={20}
                          value="3"
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b>$100</b>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div className="col-9">
                <div className="filter-sort-grid">
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className="d-flex align-items-center gap-10">
                      <p className="mb-0">SortBy:</p>
                      <select name="" id="" className='form-control form-select'>
                        <option value="manual">Featured</option>
                        <option value="best-selling" selected='selected'>Best Selling</option>
                        <option value="title-ascanding">Alphabeticaly,A-Z</option>
                        <option value="title-decanding">Alphabeticaly,Z-A</option>
                        <option value="price-ascanding">Price,Low to High</option>
                        <option value="price-decanding">Price,High to Low</option>
                        <option value="created-ascanding">Date,Old to New</option>
                        <option value="created-decanding">Date,New to Old</option>
                      </select>
                    </div>
                    <div className="d-flex align-items-center gap-10">
                      <p className="total-products pt-3">23 Products:</p>
                      <div className="d-flex align-items-center gap-10">
                        <img onClick={() => { setgrid(3); }} src="images/gr4.svg" width='26' alt="a" className='d-block img-fluid imggr btn ' />
                        <img onClick={() => { setgrid(4); }} src="images/gr3.svg" width='22' alt="b" className='d-block img-fluid imggr btn' />
                        <img onClick={() => { setgrid(6); }} src="images/gr2.svg" width='19' alt="c" className='d-block img-fluid imggr btn' />
                        <img onClick={() => { setgrid(12); }} src="images/gr.svg" width='26' alt="d" className='d-block img-fluid imggr btn' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-list pb-5">
                  <div className="d-flex flex-wrap pt-4 gap-10 ">
                    <ProductCard grid={grid} />
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

export default OurStore;
