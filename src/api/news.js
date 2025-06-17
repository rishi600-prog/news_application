import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

const fetchNews = async (country = '', category = 'general', query = '') => {
  try {
    let url = '';
    let params = { apiKey: API_KEY };

    if (query) {
      url = `${BASE_URL}/everything`;
      params.q = query;
      params.language = 'en';
    } else {
      url = `${BASE_URL}/top-headlines`;
      if (country) params.country = country;
      if (category) params.category = category;
    }

    const response = await axios.get(url, { params });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export default fetchNews;