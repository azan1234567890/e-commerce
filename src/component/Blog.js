import React from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumbs from './BreadCrumbs';
import Meta from './Meta';
import BlogCards from './BlogCards';


const Blog = () => {
  return (
<>
<Helmet>
    <Meta title={"Blog"} />
    <title>Blog</title>
</Helmet>

<BreadCrumbs title="Blog" />
<div className="blog-wrapper home-wrapper-2 py-5">
    <div className="container">
        <div className="row">
            <div className="col-3">
                <div className="filter-card mb-3">
                    <h3 className="filter-title">Find By Catagory</h3>
                    <div>
                        <ul className="ps-0">
                            <li>Watch</li>
                            <li>Camera</li>
                            <li>TV</li>
                            <li>Laptop</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-9">
                <div className="row">
                    <div className="col-6 mb-4">
                        <BlogCards />
                    </div>
                    <div className="col-6 mb-4">
                        <BlogCards />
                    </div>
                    <div className="col-6 mb-4">
                        <BlogCards />
                    </div>
                    <div className="col-6 mb-4">
                        <BlogCards />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Blog
