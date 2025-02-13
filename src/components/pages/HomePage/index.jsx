import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../../common/constants/environment';
import PostCard from '../../PostCard';
import SiteHelmet from '../../common/helmet';

const HomePage = () => {
  const [important, setImportant] = useState([]);
  const [posts, setPosts] = useState([]);

  //get Important news
  useEffect(() => {
    const fetchImportant = async () => {
      try {
        const result = await axios.get(`${API_URL}/home/important`);

        if (result.status >= 200 && result.status < 300) {
          setImportant(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchImportant();
  }, []);

  //Get last 3 post
  useEffect(() => {
    const fetchLastPost = async () => {
      try {
        const result = await axios.get(`${API_URL}/home/post`);

        if (result.status >= 200 && result.status < 300) {
          setPosts(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchLastPost();
  }, []);

  return (
    <div className="home-page">
      <SiteHelmet
        title="Kezdőlap - LISHE"
        description="Üdvözöljük a László István Honvéd Sporthorgász Egyesület hivatalos oldalán! Tekintse meg a legfrissebb híreket és információkat."
      />
      <div className="home-page__info-box">
        <p className="home-page__info-text">Körtvélyesi sorompó állapota: Olasz László Gátőr: +36-30/63-38-129</p>
      </div>
      <div className="home-page__important">
        {important.length > 0 ? <h5 className="home-page__title">Fontos!</h5> : null}
        {important.length > 0
          ? important.map((message) => {
              return (
                <p className="home-page__text-bold" key={message.id}>
                  {message.message}
                </p>
              );
            })
          : null}
      </div>
      <div className="home-page__last-posts">
        <h5 className="home-page__title">Legfrissebb bejegyzések:</h5>
        <section className="home-page__post-container">
          {posts.length > 0
            ? posts.map((post) => {
                return (
                  <div className="home-page__post-card" key={post.id}>
                    <PostCard post={post} />
                  </div>
                );
              })
            : null}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
