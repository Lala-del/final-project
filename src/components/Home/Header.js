import React from 'react'
import {Link} from 'react-router-dom'
import dots from '../assets/Group 5.png'
import man from '../assets/Group 81.png'
import woman from '../assets/Group 83.png'
import TestVideo from './TestVideo'
import VideoPlayer from './VideoPlayer'

const Header = () => {
    return (
        <div className="container">
           <div className="row">
                <div className = "col-lg-8">
                    <div className = "header">
                        <div className="header__title">
                            <h1>Nobi connect remote consultants and users</h1>
                        </div>
                        <div className="header__text">
                            <p>
                            We give you the tools you need to have paid 1:1 video calls and livestreams with your audience and paid subscribers.
                            </p>
                        </div>
                        <div className = "header__link">
                            <Link to ="/signup">
                                Register now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className = "col-lg-4">
                   <img src = {dots} className="header__decor"/>
                   <TestVideo/>
                   <img src = {man} className="header__man"/>
                   <img src = {woman} className="header__woman"/>
                </div>
           </div>
        </div>
    )
}

export default Header
