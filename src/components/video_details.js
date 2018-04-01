import React from 'react';


const VideoDetail = ({video}) =>{
    if(!video)
    {
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const URL = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={URL} className="embed-responsive-item">
                </iframe>
            </div>
            <div className="detail">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );


};

export default VideoDetail;