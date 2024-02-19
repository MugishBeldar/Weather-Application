import React from 'react';
import loaderGif from '../../assets/loader.gif';
import './loaderStyle.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <img src={loaderGif} alt="Loading..." className="loader-image" />
        </div>
    );
}

export default Loader;
