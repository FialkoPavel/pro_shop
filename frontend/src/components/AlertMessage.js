import React from 'react'
import { Alert } from 'react-bootstrap'

const AlertMessage = ({variant, message}) => {
  return (
    <Alert variant={variant}>
        { message }
    </Alert>
  )
}

AlertMessage.defaultProps = {
    variant: 'blue'
}

export default AlertMessage
