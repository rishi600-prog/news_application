import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general') => {
  try {
    const res = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: 'in',
        category,
        apiKey: API_KEY,
      },
    });
    return res.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};