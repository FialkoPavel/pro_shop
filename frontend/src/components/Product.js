import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating';

const Product = ({product}) => {
  const { name, image, _id, rating, numReviews, price } = product;
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`product/${_id}`}>
            <Card.Img variant="top" src={image} />
        </a>
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
          <h3>${price}</h3>    
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product