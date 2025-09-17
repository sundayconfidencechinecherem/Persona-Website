import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';
import confidence from "./sconfidence.jpg";
const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="container">
        <div className="section">
          <h2>Post not found</h2>
          <Link to="/blog">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="section">
        <Link to="/blog" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back to Blog
        </Link>
        
        <article className="blog-post">
          <div className="blog-header">
            <h1 className="blog-title">{post.title}</h1>
            <div className="blog-meta">
              <span><i className="far fa-calendar"></i> {post.date}</span>
              <span><i className="far fa-clock"></i> {post.readTime}</span>
              <span><i className="far fa-folder"></i> {post.category}</span>
            </div>
          </div>
          
          <img src={post.image} alt={post.title} className="blog-image" />
          
          <div 
            className="blog-content" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div className="blog-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="blog-tag">{tag}</span>
            ))}
          </div>
          
          <div className="blog-author">
            <img src={confidence} alt="Author" className="author-image" />
            <div className="author-info">
              <h3>Confidence Chinecherem</h3>
              <p>Software Developer transitioning into Cybersecurity</p>
            </div>
          </div>
          
        </article>
      </div>
    </div>
  );
};

export default BlogPost;