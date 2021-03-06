import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({url,onProgress}) => {
    return (
        <div className ="player-wrapper">
           <ReactPlayer 
           className="react-player"
           url={url}
           width = "100%"
           height = "100%"
           controls ={true}
           onProgress={onProgress}
           />
        </div>
    )
}

export default VideoPlayer
