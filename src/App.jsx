import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import axios from 'axios';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import NewsDetail from './pages/NewsDetail'; 

function App() {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines/sources?apiKey=0e9aac360e1d4865a1412e4a7c2a10a3');
        setNews(response.data.sources);

        const uniqueCategories = [...new Set(response.data.sources.map(source => source.category))];
        setCategories(uniqueCategories);

        console.log(response.data.sources);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    const fetchTopHeadlines = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=0e9aac360e1d4865a1412e4a7c2a10a3');
        setTopHeadlines(response.data.articles);
      } catch (error) {
        console.error('Error fetching top headlines:', error);
      }
    };

    fetchNews();
    fetchTopHeadlines();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home categories={categories} topHeadlines={topHeadlines} />} />
        <Route path="/category/:categoryName" element={<CategoryPage topHeadlines={topHeadlines} categories={categories} />} />
        <Route path="/article/:articleId" element={<NewsDetail />} /> 
      </Routes>
      <br />
      <Footer />
    </Router>
  );
}

export default App;
