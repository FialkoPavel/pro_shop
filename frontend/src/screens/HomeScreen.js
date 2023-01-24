import React, {useEffect } from 'react'
import Product from '../components/Product'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../action/productsActions'
import AlertMessage from '../components/AlertMessage.js'
import Loader from '../components/Loader'
 
const HomeScreen = () => {

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(productsAction())

  }, [dispatch])

  return (
    <>
      {
        loading ? <Row><Loader /></Row> :
        error ? <AlertMessage varian='danger' /> :
        <div>
          <h1>Latest Products</h1>
          <Row>
              {products.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product  product={ product } />
                  </Col>
              ))}
          </Row>
        </div> 
          
      
      }
        
    </>
  )
}

export default HomeScreen