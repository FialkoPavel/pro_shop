import React from 'react'
import products from '../products'
import { useParams } from 'react-router-dom'
import { Col, Row, ListGroup, ListGroupItem, Image, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'

const ProductScreen = ({ match }) => {
    const { id } = useParams()
    const product = products.find(product => product._id === id)
    const {image, name, description, rating, numReviews, price, countInStock} = product
  return (
    <div>
        <Button as={Link} to='/' className='btn-light my-2'>Go Back</Button>
        <Row>
            <Col md={6}>
                <Image src={`/${image}`} />
            </Col> 
            <Col md={3}>
                    <ListGroupItem>
                        <h5>{name}</h5> 
                        <hr/>
                        <Rating rating={rating} text={`${numReviews} views`} />
                        <hr/>
                        <span>Price: ${price}</span>    
                        <hr/>
                        <span>{description}</span>
                    </ListGroupItem>
            </Col>
            <Col md={3}>
                <ListGroup>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                ${price}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                                {countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem className='center'>
                        <Button className='btn-block' type='button' disabled={countInStock === 0}>
                            Add to cart
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
    </div> 
  )
}

export default ProductScreen