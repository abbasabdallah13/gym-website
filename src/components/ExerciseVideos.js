import React from 'react'
import Loader from './Loader';

const ExerciseVideos = ({videos, exerciseDetails}) => {
  if(!videos || !exerciseDetails) return <Loader />;
  return (
    <div style={{marginTop: '120px'}}>
      <h1 style={{marginBottom: '50px', textDecoration: 'underline 7px red',textUnderlineOffset: '10px', marginLeft: '20px'}}>Check the human version of the exercise on YouTube! </h1>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gridRowGap: '20px'}}>
      {videos.map((el,index) => { 
        return <div className='youtube-video-card' style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}} >
          <img style={{borderRadius: '20px' ,width: '300px', height: '200px', maxWidth: 'auto', cursor: 'pointer'}} src={el.video.thumbnails[0].url} alt={el.video.title} onClick= {() => {window.open(`https://www.youtube.com/watch?v=${el.video.videoId}`,'_blank')}}/>
          <div style={{display: 'flex', flexDirection: 'column', marginLeft: '50px', cursor: 'pointer'}} onClick= {() => {window.open(`https://www.youtube.com/watch?v=${el.video.videoId}`,'_blank')}}>
          <h4  className='youtube-channel-name' style={{fontSize: '24px', fontWeight: '600', textDecoration: 'underline'}}>By: {el.video.channelName}</h4>
          <p style={{color: '#9D9393', padding: '2px 6px'}}>{exerciseDetails.name}</p>
          </div>
          </div>
})}
    </div>
    </div>
  )
}

export default ExerciseVideos