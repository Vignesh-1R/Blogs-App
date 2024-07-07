
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUserById, fetchBlogsByUserId } from '../services/DataService';
import LoadingSpinner from '../LoadingSpinner';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await fetchUserById(id);
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching user with id ${id}:`, error);
        setLoading(false);
      }
    };

    const fetchUserBlogs = async () => {
      try {
        const userBlogs = await fetchBlogsByUserId(id);
        setBlogs(userBlogs);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching blogs for user with id ${id}:`, error);
        setLoading(false);
      }
    };

    fetchUserData();
    fetchUserBlogs();
  }, [id]);

  return (
    <div id='userDetails'>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div >
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <h3>Blogs by {user.name}:</h3>
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                  <h4>{blog.title}</h4>
                </Link>
                <p>{blog.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
