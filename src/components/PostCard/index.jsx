import React from 'react';
import './index.scss';
import { API_BASE_URL } from '../../common/constants/environment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { createPostDate, nameOfMonth } from '../../common/helper';
import { Link } from 'react-router';
import { PATHS } from '../../common/paths';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-card__heder">
        <div className="post-card__image-container">
          <img
            className="post-card__image"
            src={`${API_BASE_URL}/media/posts/${post.news_image || post.post_image}`}
            alt="Post image"
            title={post.news_title}
          />
          <p className="post-card__date">{createPostDate(post.date)}</p>
        </div>
        <h6 className="post-card__title">{post.news_title}</h6>
      </div>
      <div className="post-card__content">{post.post}</div>
      <div className="post-card__footer">
        <Link to={`${PATHS.post}/${post.id}`}>
          Tovább a cikre <FontAwesomeIcon className="post-card__icon" icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
