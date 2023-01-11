import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, ListGroup, ListGroupItem, Image, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProductScreen = () => {
   
    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
          const {data} = await axios.get(`/api/product/${id}`)
          setProduct(data)
        }

        fetchData()
        
    }, [id])
  
  return (
    <div>
        <Button as={Link} to='/' className='btn-light my-2'>Go Back</Button>
        <Row>
            <Col md={6}>
                <Image src={`/${product.image}`} />
            </Col> 
            <Col md={3}>
                    <ListGroupItem>
                        <h5>{product.name}</h5> 
                        <hr/>
                        <Rating rating={product.rating} text={`${product.numReviews} views`} />
                        <hr/>
                        <span>Price: ${product.price}</span>    
                        <hr/>
                        <span>{product.description}</span>
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
                                ${product.price}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                                {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem className='center'>
                        <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
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