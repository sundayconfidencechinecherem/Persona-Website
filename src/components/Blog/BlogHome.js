import React from 'react';
import BlogCard from './BlogCard';
import { blogPosts } from '../../data/blogData';
import "./BlogHome.css";

const BlogHome = () => {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Get latest post
  const latestPost = sortedPosts[0];
  // Get remaining posts
  const otherPosts = sortedPosts.slice(1);

  return (
    <div className="container">
      <div className="section">
        <div className="blog-hero">
          <h1 className="section-title">My Blog</h1>
          <p className="blog-subtitle">Sharing my journey, insights, and experiences in tech</p>
        </div>

        {/* Latest Post */}
        {latestPost && (
          <div className="latest-post">
            <h2 className="section-subtitle">Latest Article</h2>
            <div className="featured-post">
              <BlogCard post={latestPost} />
            </div>
          </div>
        )}

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <div className="other-posts">
            <h2 className="section-subtitle">More Articles</h2>
            <div className="blog-grid">
              {otherPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogHome;