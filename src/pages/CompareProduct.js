import React from 'react'
import { Helmet } from 'react-helmet'
import BreadCrumbs from '../component/BreadCrumbs'
import Meta from '../component/Meta'

const CompareProduct = () => {
  return (
    <>
     <Helmet>
<Meta title={"Compare Products"} />
<title>Compare Porducts</title>
      </Helmet>
{/* <BreadCrumbs title="Compare Products" /> */}
<div className="compare-product-wrapper py-5 home-wrapper-2">
    <div className="container">
        <div className="row">
            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="" />
                    <div className="product-card-img">
                        <img src="images/watch.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="col3"></div>
            <div className="col3"></div>
            <div className="col3"></div>
        </div>
    </div>
</div>
    </>
  )
}

export default CompareProduct
