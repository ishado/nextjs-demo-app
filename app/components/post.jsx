"use client"; // Add this line to mark the component as a Client Component

import { useState, useEffect } from 'react';

function Post() {
  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const postData = await response.json();
        setPost(postData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!post || Object.keys(post).length === 0) return <p>No post data</p>;

  return (
    <div>
      <h2>Post form client component</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>{post.id}</p>
    </div>
  );
}

export default Post;
