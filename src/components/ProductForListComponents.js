import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Rating } from 'react-simple-star-rating';

const ProductForListComponents = ({ images, idx }) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }} >
      <Row>
        <Col>
          <Card.Img variant="top" src={"images/"+images[idx]+"-category.png"} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} />(1)
            </Card.Text>
            <Card.Text className='h4'>
              $175  <LinkContainer to={"/product-detail"}><Button variant="danger">See product</Button></LinkContainer>
            </Card.Text>

          </Card.Body>
        </Col>
      </Row>


    </Card>
  );
};

export default ProductForListComponents;