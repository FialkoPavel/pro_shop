import React, {useEffect } from 'react'
import Product from '../components/Product'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../action/productsActions'
 
const HomeScreen = () => {

  const productListReducer = useSelector(state => state.productListReducer)

  console.log('productListReducer', productListReducer)

  const {loading, error, products} = productListReducer
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(productsAction())

  }, [dispatch])

  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
        error ? <h1>{error}</h1> :
        <>
          <h1>Latest Products</h1>
          <Row>
              {products.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product  product={ product } />
                  </Col>
              ))}
          </Row> 
        </>
      }
        
    </>
  )
}

export default HomeScreen