import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { fetchAllBlogs, fetchUserById } from '../services/DataService';
import LoadingSpinner from '../LoadingSpinner';
import '../App.css';

function Blogs() {
  // const { id } = useParams();
  const [users, setUsers] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsData = await fetchAllBlogs();
        setBlogs(blogsData);
        
        
        const userIds = [...new Set(blogsData.map(blog => blog.userId))];
        const usersData = await Promise.all(userIds.map(uid => fetchUserById(uid)));
        const usersMap = usersData.reduce((map, user) => {
          map[user.id] = user;
          return map;
        }, {});
        setUsers(usersMap);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
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
              {users[blog.userId] && (
                <p>
                  Author: <Link to={`/users/${users[blog.userId].id}`}>{users[blog.userId].name}</Link>
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blogs;
