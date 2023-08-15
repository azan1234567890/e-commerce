import React from 'react'
import { Helmet } from 'react-helmet'
import Meta from '../component/Meta'
import BreadCrumbs from '../component/BreadCrumbs'
import { Link } from 'react-router-dom'

const ReturnPolicy = () => {
  return (
   <>
   <Helmet>
                <Meta title={"ReturnPolicy"} />
                <title>ReturnPolicy</title>
            </Helmet>
            <BreadCrumbs title="ReturnPolicy" />
            <section className="privacy-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy">
                            <h1>ReturnPolicy</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea natus similique expedita officia neque autem amet, possimus minus libero.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   
   </>
  )
}

export default ReturnPolicy
