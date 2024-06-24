import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Alert, Button, Container,Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9999/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9999/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9999/customers`)
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterReview = reviews.filter((review) => review.product_id === id);
  return (
    <div>
      <Container>
        <div>
          <h2
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
              color: "red",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            {product.name}
          </h2>
        </div>

        <hr />
        <Row>
          <Col sm={4}>
            <img
              style={{ height: "300px", weight: "300px", marginBottom: "10px" }}
              src={product.image}
            />
            <br />

            <h4 style={{ color: "red",marginLeft: "10px" }}>
              <i class="bi bi-tag"></i> Giá: {product.price} {product.currency}
            </h4>
          </Col>
          <Col sm={8}>
            <Alert>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-window-fullscreen"></i>{" "}
                  <strong>Màn hình:</strong> {product.display}
                </li>
                <li>
                  <i className="bi bi-cpu"></i> <strong>Bộ vi xử lý:</strong>{" "}
                  {product.processor}
                </li>
                <li>
                  <i className="bi bi-memory"></i> <strong>RAM:</strong>{" "}
                  {product.ram}
                </li>
                <li>
                  <i className="bi bi-sd-card"></i>{" "}
                  <strong>Bộ nhớ trong:</strong> {product.storage}
                </li>
                <li>
                  <i className="bi bi-battery-full"></i> <strong>Pin:</strong>{" "}
                  {product.battery}
                </li>
                <li>
                  <i className="bi bi-camera"></i> <strong>Camera:</strong>{" "}
                  {product.camera}
                </li>
                <li>
                  <i class="bi bi-apple"></i> <strong>OS:</strong> {product.os}
                </li>
                <li>
                  <i class="bi bi-calendar-check"></i>{" "}
                  <strong>Release Date:</strong> {product.release_date}
                </li>
                <li>
                  <i class="bi bi-star-fill"></i> <strong>Rating</strong>{" "}
                  {product.ratings}
                </li>
              </ul>
            </Alert>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <h3>Đánh giá sản phẩm</h3>
        <hr />

        <Row>
          <Col sm={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <i className="bi bi-file-earmark-bar-graph"></i> Miêu tả
                </Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <i className="bi bi-patch-question"></i> Bạn đã sử dụng sản
                  phẩm này chưa?
                </Card.Title>
                <Button variant="danger">Gửi đánh giá</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Alert variant="light">
          <Form style={{ marginTop: "20px" }}>
            <Form.Group controlId="formBasicDescription">
              <Form.Control style={{height: "100px"}} type="text" placeholder="Nhập nội dung bình luận (tiếng Việt có dấu)...." />
            </Form.Group>
            <Button style={{ marginTop: "20px", marginBottom: "20px" }} variant="danger" type="submit">
              Gửi bình luận
            </Button>
          </Form>
          {filterReview.map((review, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <div>
                  <i className="bi bi-chat-square-dots"></i>{" "}
                  <strong>Bình luận:</strong>
                  <p>{review.comment}</p>
                </div>
                <div>
                  <i className="bi bi-calendar-event"></i>{" "}
                  <strong>Ngày bình luận:</strong>
                  <p>{review.review_date}</p>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Alert>
      </Container>
    </div>
  );
}
