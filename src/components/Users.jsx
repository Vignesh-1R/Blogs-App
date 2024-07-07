
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllUsers } from '../services/DataService';
import LoadingSpinner from '../LoadingSpinner';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await fetchAllUsers();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div id='Users'>
      <h2>List of Users</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>
                <h3>{user.name}</h3>
              </Link>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
