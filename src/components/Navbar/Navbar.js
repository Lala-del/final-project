import React, {useState} from 'react'
import { Link } from"react-router-dom"

const Navbar = () => {

    const [mobile,setMobile] = useState(true)
    
    return (
        <div className = "all">
            <div className = "container">
                <nav className = "navigation">
                    <div className = "navigation__logo">
                        <Link to = "/" className="home">
                                Nobı
                        </Link>
                        <div className = "navigation__decor"></div>
                    </div>
                    
                    <div className = {mobile ? "navigation__links-mobile" : "navigation__links"} onClick = {() => setMobile(false)}>
                        <Link to ="/features" className ="navigation__links-item">
                            Features
                        </Link>
                        <Link to ="/support" className ="navigation__links-item">
                            Support
                        </Link>
                    </div>
                    <div className = "navigation__search">
                        <div className="navigation__search-head">
                            <button className="navigation__search-btn" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                            <input type="text"  placeholder="Search"/>
                        </div>
                    </div>
                    <div className = {mobile ? "navigation__links-mobile" : "navigation__links"}>
                        <Link to ="/signin" className ="navigation__links-log">
                            Log in
                        </Link>
                        <Link to ="/signup" className ="navigation__links-register">
                            Register
                        </Link>
                    </div>
                    <button className = "mobile-icon"  onClick={() => setMobile(!mobile)}>
                        {mobile
                        ? (<i className = "fa fa-times"></i>) 
                        : (<i className = "fa fa-bars"></i>)
                        }
                    
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
