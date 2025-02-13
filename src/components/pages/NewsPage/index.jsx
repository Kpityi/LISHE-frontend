import { useEffect, useState } from 'react';
import './index.scss';
import PostCard from '../../PostCard';
import axios from 'axios';
import { API_URL } from '../../../common/constants/environment';
import SiteHelmet from '../../common/helmet';

const NewsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await axios.get(`${API_URL}/post`);

        if (result.status >= 200 && result.status < 300) {
          setPosts(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="news-page">
      <SiteHelmet
        title="Hírek - LISHE"
        description="Olvassa el a legfrissebb híreket és eseményeket a László István Honvéd Sporthorgász Egyesület oldalán."
      />
      <section className="news-page__post-container">
        {posts.length > 0
          ? posts.map((post) => {
              return (
                <div className="news-page__post-card" key={post.id}>
                  <PostCard post={post} />
                </div>
              );
            })
          : null}
      </section>
    </div>
  );
};

export default NewsPage;
