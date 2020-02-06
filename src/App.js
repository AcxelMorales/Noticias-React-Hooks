import React, { Fragment, useState, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import ListNews from './components/ListNews';

function App() {
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  // eslint-disable-next-line
  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=35f361ac7d3f48a6aa8de4d8e30cbfe2`;
      const response = await fetch(url);
      const data = await response.json();

      setNews(data.articles);
    };

    consultAPI();
  }, [category]);

  return (
    <Fragment>
      <Header title="Noticias React" />

      <div className="container white">
        <Form
          setCategory={setCategory}
        />

        <ListNews news={news} />
      </div>
    </Fragment>
  );
}

export default App;
