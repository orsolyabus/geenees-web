import React from 'react';
import Card from 'react-bootstrap/Card';

function Product(props) {
  const { product } = props;
  const title = product.item_attributes.title;
  const price = product.offer_summary.lowest_new_price.formatted_price;
  const image_url = product.large_image.url;
  return (
    <Card style={{ height: '100%' }} >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>price: {price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product;