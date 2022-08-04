import React from 'react'
import Loader from './Loader';

const ExerciseVideos = ({videos, exerciseDetails}) => {
  if(!videos || !exerciseDetails) return <Loader />;
  return (
    <div className='youtube-videos-container'>
      <h1>Check the human version of the exercise on YouTube! </h1>
      <div className='youtube-videos-grid' >
      {videos.map((el,index) => { 
        return <div className='youtube-video-card'>
          <img src={el.video.thumbnails[0].url} alt={el.video.title} onClick= {() => {window.open(`https://www.youtube.com/watch?v=${el.video.videoId}`,'_blank')}}/>
          <div className='youtube-link' onClick= {() => {window.open(`https://www.youtube.com/watch?v=${el.video.videoId}`,'_blank')}}>
          <h4  className='youtube-channel-name'>By: {el.video.channelName}</h4>
          <p>{exerciseDetails.name}</p>
          </div>
          </div>
})}
    </div>
    </div>
  )
}

export default ExerciseVideos