import React, { useEffect, useState } from "react";
import {
  Carousel,
  Container,
  Col,
  Row,
  Alert,
  Card,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigation = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9999/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/000/581/528/original/beautiful-abstract-wave-red-color-background-with-copy-space-for-your-business-modern-design-vector-illustration.jpg)`,
      }}
    >
      <img
        style={{ width: "100%", marginTop: "50px" }}
        src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2024/6/8/638534451427760377_desk-header.png"
      ></img>
      <Container style={{ marginTop: "20px" }}>
        <Alert variant="light">
          <Row>
            <Col sm={8}>
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/6/6/638532661110849894_F-H1_800x300@2x.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/6/3/638530053884916979_F-H1_800x300.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/6/18/638543191208516009_F-H1_800x300.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col sm={4}>
              <img
                style={{ marginBottom: "10px" }}
                src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/5/31/638527957975523345_H2%20-%20385_100.png"
              />
              <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/6/11/638536991464255630_H2_385x100.png" />
              <br />
              <div style={{ display: "flex",color:"red" }}>
                <i
                  style={{ fontSize: "1.5rem" }}
                  class="bi bi-bell"
                ></i>
                <h4>Tin khuyến mãi (Siêu hot)</h4>
              </div>
              <p>Trong Hai mobile tặng voucher đến 2 triệu</p>
              <p>Giảm 800 khi dùng thẻ 2 chân Bank </p>
            </Col>
          </Row>
        </Alert>
      </Container>
      <Container>
        <Alert variant="light">
          <div style={{ display: "flex" }}>
            <i
              style={{ color: "red", fontSize: "1.5rem" }}
              className="bi bi-fire"
            ></i>
            <h2 style={{ color: "red" }}>Khuyến mãi hot</h2>
          </div>
          <Row>
            {products.map((product) => (
              <Col
                key={product.id}
                lg={3}
                md={4}
                sm={6}
                xs={12}
                style={{ marginBottom: "20px" }}
              >
                <Card style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                  />
                  <Card.Body style={{ textAlign: "left" }}>
                    <Card.Title
                      style={{ fontSize: "1.5rem", marginBottom: "10px" }}
                    >
                      <i className="bi bi-phone"></i> {product.name}
                    </Card.Title>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-window-fullscreen"></i>{" "}
                        <strong>Màn hình:</strong> {product.display}
                      </li>
                      <li>
                        <i className="bi bi-cpu"></i>{" "}
                        <strong>Bộ vi xử lý:</strong> {product.processor}
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
                        <i className="bi bi-battery-full"></i>{" "}
                        <strong>Pin:</strong> {product.battery}
                      </li>
                      <li>
                        <i className="bi bi-camera"></i>{" "}
                        <strong>Camera:</strong> {product.camera}
                      </li>
                    </ul>
                    <Card.Text
                      style={{
                        fontSize: "1.5rem",
                        color: "red",
                        marginTop: "15px",
                      }}
                    >
                      Giá: {product.price} {product.currency}
                    </Card.Text>
                    <Button
                      onClick={() => navigation(`product/${product.id}`)}
                      style={{ width: "100%" }}
                      variant="danger"
                    >
                      Xem chi tiết
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Alert>
      </Container>
    </div>
  );
}
