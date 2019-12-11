import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Product(props) {
  const { product } = props;
  const title = product.item_attributes.title;
  const price = product.offer_summary.lowest_new_price.formatted_price;
  const image_url = product.medium_image.url;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{title}</Card.Title>
          </Col>
          <Col>
            <Card.Text>{price}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Product;