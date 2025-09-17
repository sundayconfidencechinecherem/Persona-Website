import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-card-content">
        <div className="blog-meta">
          <span><i className="far fa-calendar"></i> {post.date}</span>
          <span><i className="far fa-clock"></i> {post.readTime}</span>
          <span><i className="far fa-folder"></i> {post.category}</span>
        </div>
        <h2 className="blog-title">{post.title}</h2>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="blog-tag">{tag}</span>
          ))}
        </div>
        <Link to={`/blog/${post.id}`} className="read-more-btn">
          Read More <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;