import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <Spinner 
      animation="border" variant="primary" className="text-primary"
      style={{margin: 'auto'}}
    >
        Loading...
    </Spinner>
  )
}

export default Loader