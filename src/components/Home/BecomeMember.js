import React from 'react'
import {Link} from 'react-router-dom'

const BecomeMember = () => {
    return (
        <div>
            <section className="member">
               <div className="container">
                   <div className="member__header">
                       <h2>Ready to become a Nobi?</h2>
                   </div>
                   <div className="member__text">
                       <p>Build and grow your community face-to-face and make money while you do it.</p>
                   </div>
                   <div className="header__link">
                       <Link to='/register'>
                           Register now
                       </Link>
                   </div>
               </div>
            </section>
        </div>
    )
}

export default BecomeMember
