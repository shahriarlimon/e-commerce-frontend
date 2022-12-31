import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Rating } from 'react-simple-star-rating';

const ProductForListComponents = ({ images, name, description, rating, productId, price, reviewsNumber }) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }} >
      <Row>
        <Col>
          <Card.Img variant="top" src={images[0] ? images[0].path : ""} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={rating} />({reviewsNumber})
            </Card.Text>
            <Card.Text className='h4'>
              ${price}  <LinkContainer to={`/product-details/${productId}`}><Button variant="danger">See product</Button></LinkContainer>
            </Card.Text>

          </Card.Body>
        </Col>
      </Row>


    </Card>
  );
};

export default ProductForListComponents;