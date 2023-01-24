import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  const { name, image, _id, rating, numReviews, price } = product;
  
  return (
    <Card className='my-3 p-3 rounded'>
         <Link to={`product/${_id}`}>
           <Card.Img variant="top" src={image} />
          </Link>
        <Card.Body>
        <Card.Title>
            <strong>
                { name }
            </strong>
        </Card.Title>
        <Card.Text>
            <Rating rating={rating} text={`${numReviews} views`} />
        </Card.Text>
        <Card.Text>
          <strong>${price}</strong>    
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product