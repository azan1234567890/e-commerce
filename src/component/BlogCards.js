import React from 'react'
import { Link } from 'react-router-dom';

const BlogCards = () => {
  return (
    
    
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' />
            </div>
            <div className='blog-content'>
                <p className='date'>1-January-2023</p>
                <h5 className='title'> A Beautiful Sunday</h5>
                <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, illo?</p>
                <Link className='button' to='/Blog/:id'>Read More</Link>
            </div>
            
        </div>
    
    
    
  )
}

export default BlogCards;
