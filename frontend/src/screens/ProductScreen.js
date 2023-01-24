import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Col, Row, ListGroup, ListGroupItem, Image, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import { productDetailAction } from '../action/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import AlertMessage from '../components/AlertMessage'


const ProductScreen = () => {
   
    const [count, setCount ] = useState(1)
    const productDetail = useSelector(state => state.productDetail)
    const { product, loading, error } = productDetail
    const { id } = useParams()
    const dispatch = useDispatch()  
    const navigate = useNavigate()


    const cartPageHandler = () => {
        navigate(`/cart/${id}?count=${count}`)
    }


    useEffect(() => {
     
        dispatch(productDetailAction(id))
        
    }, [dispatch])
  
  return (
    <div>
       {
        loading ? <Row><Loader/></Row> :
        error ? <AlertMessage/> :
        <>
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
                    {
                        product.countInStock && 
                     <ListGroupItem>
                         <Row>
                            <Col className='vertcal-align'>Count</Col>
                            <Col>
                                {
                                    <Form.Control as="select" onChange={(e) => { setCount(e.target.value) }}>
                                        {
                                            Array.from({length: product.countInStock}, (_, i) => i + 1).map(i => (
                                                <option key={i} value={i} >
                                                    {i}
                                                </option>
                                            ))
                                        }                                   
                                    </Form.Control>                               
                                }
                            </Col>
                         </Row>
                     </ListGroupItem>
                    }
                    <ListGroupItem className='center'>
                        <Button className='btn-block' type='button' disabled={product.countInStock === 0} onClick={cartPageHandler}>
                            Add to cart
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
        </>
       }
    </div> 
  )
}

export default ProductScreen