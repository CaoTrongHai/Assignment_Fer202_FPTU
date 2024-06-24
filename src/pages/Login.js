import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(https://png.pngtree.com/background/20230607/original/pngtree-various-smartphones-arranged-on-a-table-picture-image_2903291.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="bg-white p-5 rounded shadow">
              <h2 className="text-center mb-4">Đăng nhập</h2>
              <Form>
                <Form.Group controlId="formBasicName">
                  <i class="bi bi-person"></i>
                  <Form.Label>Tài khoản</Form.Label>
                  <Form.Control type="text" placeholder="Nhập tài khoản" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <i class="bi bi-key-fill"></i>
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control type="password" placeholder="Nhập mật khẩu" />
                </Form.Group>

                <Button
                  style={{ marginTop: "10px" }}
                  variant="primary"
                  type="submit"
                  block
                >
                  Đăng nhập
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p>
                  Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
