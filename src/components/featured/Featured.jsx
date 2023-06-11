//this is the below  navbar page
import React from 'react';
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            {/*left side*/}
            <div className="left">
                <h1>Find the perfect freelance services for your business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='try "building mobile app"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>popular</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            {/*right side*/}
            <div className="right">
                <img src="./img/simmi.jpeg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured