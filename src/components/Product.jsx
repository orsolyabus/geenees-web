import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Product() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>Product Title</Card.Title>
          </Col>
          <Col>
            <Card.Text>
              price
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Product;