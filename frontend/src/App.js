import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { Switch, Route, Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

import {
  FaShoppingCart
} from "react-icons/fa";

import Card from "./components/Home";
import About from "./components/About";
import Cartproducts from "./components/Cartproducts";
import Order from "./components/Order";
import AddProduct from "./components/AddProduct";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchK: "",
      count: "0",
      total: "0",
      cp: [],
    };
  }

  setCounter = (e) => {
    this.setState({ count: e });
  };

  getProducts = (p) => {
    this.setState({ cp: p });
  };

  removeProduct = (p, c) => {
    this.setState({ cp: p, count: this.state.count - c });
  };

  addOrderProduct = (p) => {
    this.setState({ cp: p, count: this.state.count + 1 });
  };

  addProduct = (p) => {
    this.setState({ cp: p, count: this.state.count + 1 });
  };

  subProduct = (p) => {
    this.setState({ cp: p, count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Link to="/">
            <img
              style={{ margin: "10px" }}
              alt="prohub"
              src={"prohub_logo.png"}
            />
          </Link>
          <div
            style={{
              marginLeft: "20%",
              width: "100%",
            }}
          >
            <Form
              inline
              onSubmit={(e) => {
                e.preventDefault();
                this.setState({ searchK: this.state.search });
              }}
            >
              <Link
                to="/Cartproducts"
                style={{
                  color: "yellow",
                  paddingRight: "50px",
                  marginLeft: "22%",
                }}
              >
                <h2>
                  {" "}
                  <FaShoppingCart />
                </h2>
              </Link>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  borderRadius: "10px",
                  textAlign: "center",
                  width: "30px",
                  marginLeft: "-50px",
                  marginRight: "40px",
                  background: "blue",
                  color: "white",
                  marginTop: "35px",
                }}
              >
                {this.state.count}
              </p>
            </Form>
          </div>
        </Navbar>
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <div class="nav-items">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/"> Home </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about"> About </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/addProduct">Add Product</Link>
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <Switch>
            <Route path="/Cartproducts">
              <Cartproducts
                pro={this.state.cp}
                remove={this.removeProduct}
                add={this.addProduct}
                sub={this.subProduct}
              />
            </Route>
			
            <Route path="/addProduct">
              <AddProduct />
            </Route>

            <Route path="/order">
              <Order pro={this.state.cp} add={this.addOrderProduct} />
            </Route>

            <Route exact path="/">
              <Card
                filter={this.state.searchK}
                crt={this.setCounter}
                products={this.getProducts}
              />
            </Route>

            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        <div style={{ paddingTop: "3%" }}>
          <MDBFooter className="footer">
            <div className="footer-copyright text-center py-3">
              <MDBContainer>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://www.prohubdesigns.com"> ProhubDesigns.com </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
      </div>
    );
  }
}
