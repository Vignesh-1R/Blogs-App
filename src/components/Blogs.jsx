
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllBlogs } from '../services/DataService';
import LoadingSpinner from '../LoadingSpinner';
import '../App.css';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await fetchAllBlogs();
        setBlogs(blogsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div id='blogList'>
      <h2>List of Blogs</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <h3>{blog.title}</h3>
              </Link>
              <p>{blog.body}</p>
              <p>Author: <Link to={`/users/${blog.userId}`}>User {blog.userId}</Link></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blogs;
