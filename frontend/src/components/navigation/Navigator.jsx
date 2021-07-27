import React from "react";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import styles from './Navigator.module.css'

function Navigator() {
  return (
    <>
      {/* navigation */}
      <div className={styles.ban__top}>
        <Container>
          <Row className='align-items-center justify-content-between'>
            <Col md={4}>
              <div className={styles.agileits__nav__search}>
                <form action="/" method="post">
                  <select
                    id={styles.agileinfo__nav__search}
                    name="agileinfo_search"
                    required=""
                  >
                    <option value="">All Categories</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Household">Household</option>
                    <option value="Snacks &amp; Beverages">
                      Snacks & Beverages
                    </option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Gift Hampers">Gift Hampers</option>
                    <option value="Fruits &amp; Vegetables">
                      Fruits & Vegetables
                    </option>
                    <option value="Baby Care">Baby Care</option>
                    <option value="Soft Drinks &amp; Juices">
                      Soft Drinks & Juices
                    </option>
                    <option value="Frozen Food">Frozen Food</option>
                    <option value="Bread &amp; Bakery">Bread & Bakery</option>
                    <option value="Sweets">Sweets</option>
                  </select>
                </form>
              </div>
            </Col>

            <Col md={8}>

            <Nav className={`${styles.custom__nav} justify-content-end`}>
              <Nav.Link className={styles.active} href="">Home</Nav.Link>
              <Nav.Link href="/">About Us</Nav.Link>

              <NavDropdown class={styles.sub__menu} title="Kitchen" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              

              <NavDropdown title="Household" id="basic-nav-dropdown">
                <div class={styles.sub__menu}>
                <Row>
                  <Col md={6}>
                      <NavDropdown.Item href="">Kitchen & Dining</NavDropdown.Item>
                      <NavDropdown.Item href="">Detergents</NavDropdown.Item>
                      <NavDropdown.Item href="">Utensil Cleaners</NavDropdown.Item>
                      <NavDropdown.Item href="">Kitchen & Dining</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Floor & Other Cleaners</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Disposables, Garbage Bag</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Repellents & Fresheners</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Dishwash</NavDropdown.Item>
                  </Col>
                  <Col md={6}>
                      <NavDropdown.Item href="#action/3.3">Pet Care</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3"> Crackers</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3"> Festive Decoratives</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3"> Plasticware</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3"> Home Care</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3"> Cleaning Accessories</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3"> Cleaning Accessories</NavDropdown.Item>
                  </Col>
                </Row>
                </div>
                
              </NavDropdown>

              <Nav.Link href="">FAQS</Nav.Link>

              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="">Contact</Nav.Link>
              
            </Nav>

            </Col>
          </Row>
        </Container>
      </div>
      {/* end navigation banner */}
    </>
  );
}

export default Navigator;
