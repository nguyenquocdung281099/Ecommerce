import React from 'react';
import StarRatings from 'react-star-ratings';

const RatingN = (score,starRatedColor='#737373',starDimension="15px",starSpacing="0") => {
    return (
        <StarRatings
            rating={score}
            numberOfStars={5}
            name='rating'
            starRatedColor={starRatedColor}
            starDimension={starDimension}
            starSpacing	={starSpacing}
        />
    );
}

export default RatingN;