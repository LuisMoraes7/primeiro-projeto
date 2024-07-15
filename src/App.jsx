import React, { useEffect, useState } from "react";

import './styles/web.css'
import Navbar from "./components/Navbar/navbar.jsx";
import { Article } from './components/Article/Article.jsx'
import { Counter } from "./components/Counter/Counter.jsx";
import axios from "axios";
import { InfinitySpin } from 'react-loader-spinner'


//npm start p/ rodar codigo

//componente funcional é uma função que retorna HTML

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
      async function loadNews(){
      const response = await axios.get(
        'https://api.spaceflightnewsapi.net/v4/articles/'
      )
      const newsData = response.data.results;

      setNews(newsData)

    }
    loadNews()
  }, [])
  

    return (
      
      <div>
        <Navbar></Navbar>
        


        <article id='all-articles'>
          { news.length === 0 ? (
            <div style={ {height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'} }>
              <InfinitySpin
              visible={true}
              width="200"
              color="white"
              ariaLabel="infinity-spin-loading"
                    />
            </div>
          ) : news.map((article) => {
            return (
              <Article 
              key={article.key}
              link={article.url}
              title={article.title}
              provider={article.news_site} 
              description={article.summary}
              thumbnail={article.image_url}

              />
            )
          }) }   

        </article>
      </div>
    );
}

export default App;
