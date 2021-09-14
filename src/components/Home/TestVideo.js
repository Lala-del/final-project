import React, {useState} from 'react'
import VideoPlayer from './VideoPlayer'
import { Link } from 'react-router-dom';

const TestVideo = () => {
    const [watchComplete,setWatchComplete] = useState(false);

    const handleWatchComplete = (state) => {
        console.log(state)
    }
    return (
        <div className="video-bg">
            {/* <VideoPlayer
               url="https://www.youtube.com/watch?v=t_Kd_G7p6ZQ"
               onProgress={handleWatchComplete}
            /> */}
            <Link to="/fetures">
                Book now
            </Link>
        </div>
    )
}

export default TestVideo
