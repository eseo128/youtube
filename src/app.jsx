import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    //포스트맨 search API 불러오기

  const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyDFmnSko-nXIO9qNH40be8XTPOXEIXuE2A`, requestOptions)
  .then(response => response.json())
  .then(result => setVideos(result.items))
  .catch(error => console.log('error', error));

  }

  useEffect(() => {
    //포스트맨 Most Popular API 불러오기

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDFmnSko-nXIO9qNH40be8XTPOXEIXuE2A",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />
  </div>
  )
}

export default App;
