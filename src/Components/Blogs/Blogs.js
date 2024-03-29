import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Blog from './Blog';
import Header from './Header';

const Blogs = () => {
  const { url } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${url}/blogs`)
      .then((res) => {
        setBlogs(res.data.result);
        setLoading(false); // Set loading state to false after blogs are fetched
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setLoading(false); // Set loading state to false if there's an error
      });
  }, [url]);

  return (
    <div>
      <Header />
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {loading ? (
          <span className="loading loading-spinner text-accent mx-auto my-auto"></span> // Show loader while blogs are being fetched
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8">
            {[...blogs].map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
