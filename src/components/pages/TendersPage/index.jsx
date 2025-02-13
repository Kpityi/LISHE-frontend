import { useEffect, useState } from 'react';
import './index.scss';
import PostCard from '../../PostCard';
import axios from 'axios';
import { API_URL } from '../../../common/constants/environment';
import SiteHelmet from '../../common/helmet';

const TendersPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await axios.get(`${API_URL}/post/tender`);

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
    <div className="tenders-page">
      <SiteHelmet
        title="Pályázatok - LISHE"
        description="Tekintse meg a László István Honvéd Sporthorgász Egyesület aktuális pályázatait és felhívásait."
      />
      <section className="tenders-page__post-container">
        {posts.length > 0
          ? posts.map((post) => {
              return (
                <div className="tenders-page__post-card" key={post.id}>
                  <PostCard post={post} />
                </div>
              );
            })
          : null}
      </section>
    </div>
  );
};

export default TendersPage;
