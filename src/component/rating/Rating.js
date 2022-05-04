import React from 'react';
import StarRatings from 'react-star-ratings';

const Rating = (score,setScore) => {
    return (
        <StarRatings
            rating={score}
            changeRating={(newScore)=> setScore(newScore)}
            numberOfStars={5}
            name='rating'
            starHoverColor='#F8CC03'
            starRatedColor='#F8CC03'
            starDimension="20px"
        />
    );
}

export default Rating;