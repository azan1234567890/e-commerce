import React from 'react'
import { Helmet } from 'react-helmet'
import Meta from '../component/Meta'
import BreadCrumbs from '../component/BreadCrumbs'
import { Link } from 'react-router-dom'

const TermsandConditions = () => {
  return (
    <>
    <Helmet>
                <Meta title={"TermsandCondition"} />
                <title>TermsandCondition</title>
            </Helmet>
            <BreadCrumbs title="TermsandCondition" />
            <section className="privacy-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy">
                            <h1>TermsandConditions</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea natus similique expedita officia neque autem amet, possimus minus libero.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default TermsandConditions
