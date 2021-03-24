import React from 'react';
import '../style/Styles.css';

const LoadMore = ({
    onclick
}) => {
    return (
        <div className="btn-container">
            <button onClick={onclick} className="bubble btn btn-highlight">
                Load More
            </button>
        </div>
    );
};

export default LoadMore;