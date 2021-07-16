import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    //포스트맨 search API 불러오기
    youtube
      .search(query)//
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    //포스트맨 Most Popular API 불러오기
    youtube
      .mostPopular()//
      .then(videos => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
