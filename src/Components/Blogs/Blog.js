import React from 'react';

const Blog = ({blog}) => {
    const {title,image, date, description} = blog;
    return (
        <div>
            <div className="card h-100 bg-base-100 shadow-xl">
  <figure className=''><img className='h-50' src={image} alt="Shoes" /></figure>
  <div className="card-body">
  <span className="text-xs dark:text-gray-400">{date}</span>
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    
  </div>
</div>
        </div>
    );
};

export default Blog;