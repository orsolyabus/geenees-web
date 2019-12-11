import React, { Component } from 'react';
import Product from './Product';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CategoryPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: []
    };
  }

  componentDidMount() {
    const URL = "https://stgapi.geenees.co/1.0/store/ae29bef1-9104-4340-b80d-fffdc663c9a7/categories/3561347011"

    fetch(URL, {
      method: "GET",
      headers: {
        "geenee-session": localStorage.getItem("geenee-session")
      }
    })
      .then(res => res.json())
      // TODO: handle errors
      .then(res => {
        const products = res.data.search_results.items
        this.setState({
          products: products,
          loading: false
        });
      })
  }

  render() {
    const { loading, products } = this.state;
    if (loading) {
      return (
        <main className="QuestionIndexPage">
          <h1>Baby Products</h1>
          <h2>Loading...</h2>
        </main>
      )
    }
    return (
      <div>
        <h1>Baby products</h1>
        <Row className="px-4 " >
          {products.map(product => (
            <Col className="mb-4" xs={6} md={4} lg={3} >
              <Product key={product.asin} product={product} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default CategoryPage;