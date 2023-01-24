import React from 'react'
import PropTypes from 'prop-types';

const Rating = ({rating, text, color}) => {
  return (
    <>
        <i style={{ color }} className={
            rating >= 1 ? 'fa-solid fa-star' :
            rating >= 0.5 ? 'fa-solid fa-star-half-stroke' :
            'fa-regular fa-star'
            }></i>
        <i style={{ color }}  className={
            rating >= 2 ? 'fa-solid fa-star' :
            rating >= 1.5 ? 'fa-solid fa-star-half-stroke' :
            'fa-regular fa-star'
            }></i>
        <i style={{ color }}  className={
            rating >= 3 ? 'fa-solid fa-star' :
            rating >= 2.5 ? 'fa-solid fa-star-half-stroke' :
            'fa-regular fa-star'
            }></i>
        <i style={{ color }}  className={
            rating >= 4 ? 'fa-solid fa-star' :
            rating >= 3.5 ? 'fa-solid fa-star-half-stroke' :
            'fa-regular fa-star'
            }></i>
        <i style={{ color }}  className={
            rating >= 5 ? 'fa-solid fa-star' :
            rating >= 4.5 ? 'fa-solid fa-star-half-stroke' :
            'fa-regular fa-star'
            }></i>
        <span>&nbsp; { text} </span>
    </>
  )
}

Rating.defaultProps = {
    color: 'yellow',
    rating: 0
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating