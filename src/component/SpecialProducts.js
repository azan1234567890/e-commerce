import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const SpecialProducts = () => {
  return (
    <>
     <div className="col-md-4">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div><img  className='img-fluid' src='images/watch.jpg' /></div>
                <div className="special-product-content">
                    <h5 className='brand'>Rolex</h5>
                    <h6 className='title'>Rolex is a great watch</h6>
                    <ReactStars
                    count={5}
                         size={24}
                         value="3"
                         edit={false}
                            activeColor="#ffd700"
  />
  <p className="price"><span className="red-p">$100</span> &nbsp; <strike>$200</strike></p>
  <div className="discount-till d-flex align-items-center gap-10"><p className='mb-0'><b>5 </b>days</p>
  <div className="d-flex gap-10 align-items-center">
    <span className='badge rounded-circle p-1 bg-warning'>1</span>
    <span className='badge rounded-circle p-1 bg-warning'>2</span>
    <span className='badge rounded-circle p-1 bg-warning'>3</span>
  </div>
  </div>
  <div className="prod-count"><p>Products: 5</p>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width:'25%' }} area-valuenow="25" area-valuemin="0" area-valuemax="100"></div>
    </div>
  </div>
  <div className="prod-count my-3"></div>
  <Link className='button'>Add To Cart</Link>
                </div>
            </div>
        </div>
        </div> 
        
    </>
  )
}

export default SpecialProducts;
