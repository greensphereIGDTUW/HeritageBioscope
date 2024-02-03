import React, { useEffect, useState } from 'react';
import { Container, Box, Heading, Text, Image, Button, Grid, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './EnvNews.css';
import { images } from '../../constants';

const GreensphereNews = () => {
  const [articles, setArticles] = useState([]);

  const API_KEY = "0e4afaa486ce461b9fa63ffa8e04553e";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=biodiversity&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const openArticle = (url) => {
    window.open(url);
  };

  return (
    <>
            <div id="root">
        <div className="til">
          <h1>EnviroGroove Headlines</h1>
          <h3>
            <i>Breaking Down the Hottest Biodiversity Hits</i>
          </h3>
        </div>
      </div>
      <div className="news-cards-container">
      {articles.map((article, index) => (
        <div> 
        {article.title!=="[Removed]" && 
                  <div
                  onClick={() => openArticle(article.url)}
                  key={index}
                  className="news-card"
                >
                  <img
                    src={article.urlToImage?article.urlToImage:images.navbarlogo}
                    alt="News-Image"
                    className="news-card-header-img"
                  />
                  <div className="news-card-content">
                    <h4 className="news-card-title">{article.title}</h4>
                    <p className="news-card-description">
                      {article.description}
                    </p>
                    <button
                      as={Link}
                      to={article.url}
                      className="news-read-more-button"
                    >
                      Read more...
                    </button>
                  </div>
                </div>        
            }
            </div>
      ))}
    </div>

    </>
  );
};

export default GreensphereNews;
