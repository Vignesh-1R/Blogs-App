
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogById } from '../services/DataService';
import LoadingSpinner from '../LoadingSpinner'; 

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await fetchBlogById(id);
        setBlog(blogData);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching blog with id ${id}:`, error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div id='blogDetails'>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
