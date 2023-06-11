import { React, useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import './Navbar.scss';
import {useLocation} from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation();


    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, [])

    const currentUser = {
        id: 1,
        username: "Simran",
        isSeller: true
    }

    return (
        <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                            <span className='text'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Explore</span>
                    <span>English</span>
                    <span>Fiverr Business</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {
                        currentUser && (
                            <div className='user' onClick={() => setOpen(!open)}>
                                <img src='https://media.istockphoto.com/id/1340928327/vector/s-letter-initial-luxurious-logo-template-premium-s-logo-golden-concept-s-letter-with-golden.jpg?s=1024x1024&w=is&k=20&c=eOahjtvpKbaF4B00koUPJpntdSDty3jqvBMPmIMhtWk=' alt='' />
                                <span>{currentUser?.username}</span>
                                {open && (<div className='options'>
                                    {currentUser?.isSeller && (
                                        <>
                                            <Link className="link" to='/mygigs'>Gigs</Link>
                                            <Link className="link" to='/add'>Add New Gig</Link>
                                        </>
                                    )}
                                    <Link className="link" to='/orders'>Orders</Link>
                                    <Link className="link" to='/messages'>Messages</Link>
                                    <Link className="link" to='/'>Logout</Link>
                                </div>
                                )}
                            </div>
                        )}
                </div>
            </div>
            {(active || pathname !=="/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="link" to="/">
                            Video & Animation
                        </Link>
                        <Link className="link" to="/">
                            Writing & translation
                        </Link>
                        <Link className="link" to="/">
                            AI Services
                        </Link>
                        <Link className="link" to="/">
                            Digital Marketing
                        </Link>
                        <Link className="link" to="/">
                            Music & Audio
                        </Link>
                        <Link className="link" to="/">
                            Programming & Tech
                        </Link>
                        <Link className="link" to="/">
                            Business
                        </Link>
                        <Link className="link" to="/">
                            LifeStyle
                        </Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar