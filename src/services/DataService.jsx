
export const fetchAllBlogs = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return await response.json();
};

export const fetchBlogById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch blog with id ${id}`);
  }
  return await response.json();
};

export const fetchBlogsByUserId = async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  if (!response.ok) {
    throw new Error(`Failed to fetch blogs for user with id ${userId}`);
  }
  return await response.json();
};

export const fetchAllUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return await response.json();
};

export const fetchUserById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user with id ${id}`);
  }
  return await response.json();
};
