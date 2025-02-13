import { useParams } from 'react-router';
import { createPostDate } from '../../common/helper';
import './index.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, API_URL } from '../../common/constants/environment';
import SiteHelmet from '../common/helmet';

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/post/${postId}`);
        if (response.status >= 200 && response.status < 300) {
          setPost(response.data[0]);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="post-page">
      {post ? (
        <React.Fragment>
          <SiteHelmet title={post.news_title} description={post.post_title} />
          <h3 className="post-page_title">{post.news_title}</h3>

          <div className="post-page__image-container">
            <img
              className="post-page__image"
              src={`${API_BASE_URL}/media/posts/${post.news_image || post.post_image}`}
              alt="Post image"
              title={post.news_title}
            />
            <p className="post-page__date">{createPostDate(post.date)}</p>
          </div>
          <div className="post-page__content">
            <p className="post-page__text-title">{post.post_title}</p>
            {post.post ? (
              <div className="post-page__text-container">
                {post.post_image && (
                  <div className="post-page__post-image-container">
                    <img
                      className="post-page__image"
                      src={`${API_BASE_URL}/media/posts/${post.post_image}`}
                      alt="Post image"
                      title={post.news_title}
                    />
                  </div>
                )}
                {post.post.split('\r\n').map((p, index) => (
                  <p key={index} className="post-page__text">
                    {p}
                  </p>
                ))}
              </div>
            ) : (
              <div className="post-page__post-image-only-container">
                <img
                  className="post-page__image"
                  src={`${API_BASE_URL}/media/posts/${post.post_image}`}
                  alt="Post image"
                  title={post.news_title}
                />
              </div>
            )}
          </div>
        </React.Fragment>
      ) : (
        'Loading page...'
      )}
    </div>
  );
};

export default PostPage;
