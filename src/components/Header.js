import React, { useEffect, useState } from "react";
import {
  Nav,
  Form,
  Navbar,
  NavDropdown,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9999/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {/* <Nav style={{ backgroundColor: "red", height: "70px" }}>
        <Nav.Item>
          <Nav.Link style={{ color: "white", fontSize: "20px" }}>
            <Link to={"/"}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Logo"
                style={{
                  height: "40px",
                  width: "50px",
                  marginTop: "5px",
                  marginLeft: "100px",
                  marginRight: "10px",
                }}
              />
            </Link>
            TrongHai Mobile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={{ marginLeft: "60px" }}
          className="d-flex align-items-center"
        >
          <Form.Control
            type="text"
            placeholder="Nhập tên điện thoại,máy tính,...cần tìm"
            style={{ width: "320px", marginRight: "10px" }}
          />
          <i
            className="bi bi-search"
            style={{ fontSize: "1.5rem", color: "white" }}
          ></i>
        </Nav.Item>

        <Nav.Item
          style={{ marginLeft: "100px" }}
          className="d-flex align-items-center "
        >
          <i
            className="bi bi-info-circle"
            style={{ color: "white", fontSize: "1.5rem" }}
          ></i>
          <Nav.Link style={{ color: "white" }}>Thông tin hay</Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-flex align-items-center">
          <i
            className="bi bi-journal-text"
            style={{ color: "white", fontSize: "1.5rem" }}
          ></i>
          <Nav.Link style={{ color: "white" }}>Chính sách mua hàng</Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-flex align-items-center">
          <i
            style={{ color: "white", fontSize: "1.5rem" }}
            className="bi bi-bag-heart"
          ></i>
          <Nav.Link style={{ color: "white" }}>Giỏ hàng</Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-flex align-items-center">
          <i style={{ color: "white" }} className="bi bi-person-circle"></i>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Đăng nhập
          </Link>
        </Nav.Item>
      </Nav>
      <Nav
        style={{
          backgroundColor: "#424141",
          height: "50px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {categories.map((category) => {
          return (
            <Nav.Link
              style={{ textDecoration: "none", color: "white" }}
              href={`/category/${category.id}`}
            >
              {category.name}
            </Nav.Link>
          );
        })}
      </Nav> */}
      <Navbar expand="lg" style={{ backgroundColor: "red" }}>
        <Container>
         <Link to={"/"}>
          <Navbar.Brand>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Logo"
              style={{
                height: "40px",
                width: "50px",
                marginTop: "5px",
                marginLeft: "30px",
                marginRight: "5px",
              }}
            ></img>
          </Navbar.Brand>
          </Link>
          <Navbar.Brand
            style={{
              color: "white",
              marginRight: "90px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              letterSpacing: "1px",
              transition: "color 0.3s ease",
            }}
          >
            TrongHai Mobile
          </Navbar.Brand>
          <Form.Control
            type="text"
            placeholder="Nhập tên,điện thoại,... cần tìm"
            style={{ width: "320px", marginRight: "10px" }}
          />
          <i
            style={{ color: "white", marginRight: "30px" }}
            class="bi bi-search"
          ></i>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <i
                style={{ color: "white", marginTop: "5px", fontSize: "1.5rem" }}
                class="bi bi-info-circle-fill"
              ></i>
              <Nav.Link href="#home" style={{ color: "white" }}>
                Thông tin hay
              </Nav.Link>{" "}
              <i
                className="bi bi-journal-text"
                style={{ color: "white", fontSize: "1.5rem" }}
              ></i>
              <Nav.Link href="#link" style={{ color: "white" }}>
                Chính sách mua hàng
              </Nav.Link>{" "}
              <i
                style={{ color: "white", fontSize: "1.5rem" }}
                className="bi bi-bag-heart"
              ></i>
              <Nav.Link href="#link" style={{ color: "white" }}>
                Giỏ hàng
              </Nav.Link>{" "}
              <i
                style={{ color: "white", fontSize: "1.5rem" }}
                class="bi bi-person"
              ></i>
              <Nav.Link href="/login" style={{ color: "white" }}>
                Đăng nhập
              </Nav.Link>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Nav
        className="justify-content-center"
        style={{ backgroundColor: "#424242" }}
      >
        {categories.map((category) => {
          return (
            <Nav.Item>
              <Nav.Link
                style={{ textDecoration: "none", color: "white" }}
                href={`/category/${category.id}`}
              >
                {category.name}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </div>
  );
}
