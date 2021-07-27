import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <footer>
      <Container>
          <p className={styles.footer_main}>
            <span>"Grocery Shoppy"</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente minus aperiam quibusdam quisquam nulla provident, consequatur sed. Tempora ut cum aut provident placeat maiores. Eos.
          </p>
          
          <div className={styles.w3l_grids_footer}>
            <Container>
              <Row>
                <Col md={4}>
                  <div className={styles.offer_footer}>
                    <div className={styles.icon_fot}>
                      <span
                        className="fa fa-map_marker"
                        aria_hidden="true"
                      ></span>
                    </div>
                    <div className={styles.text_form_footer}>
                      <h3>Track Your Order</h3>
                    </div>
                  </div>
                </Col>

                <Col md={4}>
                  <div className={styles.offer_footer}>
                    <div className={styles.icon_fot}>
                      <span className="fa fa-refresh" aria_hidden="true"></span>
                    </div>
                    <div className={styles.text_form_footer}>
                      <h3>Free & Easy Returns</h3>
                    </div>
                  </div>
                </Col>

                <Col md={4}>
                  <div className={styles.offer_footer}>
                    <div className="col_xs_4 icon_fot">
                      <span className="fa fa-times" aria_hidden="true"></span>
                    </div>
                    <div className={styles.text_form_footer}>
                      <h3>Online cancellation </h3>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>


          <div className={`${styles.footer_info} ${styles.w3_agileits_info}`}>
            <Container>
              <Row>
                <Col md={5}>
                 <Row>
                   <h3>Categories</h3>
                   <Col md={6} className ={styles.footer_grids}>
                      <ul>
                        <li>
                          <a href="product.html">Grocery</a>
                        </li>
                        <li>
                          <a href="product.html">Fruits</a>
                        </li>
                        <li>
                          <a href="product.html">Soft Drinks</a>
                        </li>
                        <li>
                          <a href="product2.html">Dishwashers</a>
                        </li>
                        <li>
                          <a href="product.html">Biscuits & Cookies</a>
                        </li>
                        <li>
                          <a href="product2.html">Baby Diapers</a>
                        </li>
                      </ul>
                   </Col>
                   <Col md={6} className ={styles.footer_grids}>
                   <ul>
                        <li>
                          <a href="product.html">Snacks & Beverages</a>
                        </li>
                        <li>
                          <a href="product.html">Bread & Bakery</a>
                        </li>
                        <li>
                          <a href="product.html">Sweets</a>
                        </li>
                        <li>
                          <a href="product.html">Chocolates & Biscuits</a>
                        </li>
                        <li>
                          <a href="product2.html">Personal Care</a>
                        </li>
                        <li>
                          <a href="product.html">Dried Fruits & Nuts</a>
                        </li>
                      </ul>
                   </Col>
                 </Row>
                </Col>

                <Col md={5}>
                  <Row>
                    <Col md={6} className={styles.footer_grids}>
                    <h3>Quick Links</h3>
                      <ul>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="help.html">Help</a>
                        </li>
                        <li>
                          <a href="faqs.html">Faqs</a>
                        </li>
                        <li>
                          <a href="terms.html">Terms of use</a>
                        </li>
                        <li>
                          <a href="privacy.html">Privacy Policy</a>
                        </li>
                      </ul>
                    </Col>
                    <Col md={6} className={styles.footer_grids}>
                    <h3>Get in Touch</h3>
                      <ul>
                        <li>
                          <i className="fa fa-map_marker"></i> 123 Sebastian,
                          USA.
                        </li>
                        <li>
                          <i className="fa fa-mobile"></i> 333 222 3333{" "}
                        </li>
                        <li>
                          <i className="fa fa-phone"></i> +222 11 4444{" "}
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>
                          <a href="mailto:example@mail.com">
                            {" "}
                            mail@example.com
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>

                <Col md={2} className ={styles.footer_grids}>
                    <h3>Follow Us on</h3>
                    <div className={styles.social}>
                      <ul className='d-flex justify-content-around'>
                        <li>
                          <a className={`${styles.icon} ${styles.fb}`} href="/">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className={`${styles.icon} ${styles.tw}`} href="/">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className={`${styles.icon} ${styles.gp}`} href="/">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.agileits_app_devices}>
                      <h5>Download the App</h5>
                      <a href="/">
                        <img src="images/1.png" alt="" />
                      </a>
                      <a href="/">
                        <img src="images/2.png" alt="" />
                      </a>
                    </div>
                </Col>
              </Row>
            </Container>
          </div>
         
          <div className={styles.agile_sometext}>
            <div className={styles.sub_some}>
              <h5>Online Grocery Shopping</h5>
              <p>
                Order online. All your favourite products from the low price
                online supermarket for grocery home delivery in Delhi, Gurgaon,
                Bengaluru, Mumbai and other cities in India. Lowest prices
                guaranteed on Patanjali, Aashirvaad, Pampers, Maggi, Saffola,
                Huggies, Fortune, Nestle, Amul, MamyPoko Pants, Surf Excel,
                Ariel, Vim, Haldiram's and others.
              </p>
            </div>
            <div className={styles.sub_some}>
              <h5>Shop online with the best deals & offers</h5>
              <p>
                Now Get Upto 40% Off On Everyday Essential Products Shown On The
                Offer Page. The range includes Grocery, Personal Care, Baby
                Care, Pet Supplies, Healthcare and Other Daily Need Products.
                Discount May Vary From Product To Product.
              </p>
            </div>
            {/* brands */}
            <div className={styles.sub_some}>
              <h5>Popular Brands</h5>
              <ul>
                <li>
                  <a href="product.html">Aashirvaad</a>
                </li>
                <li>
                  <a href="product.html">Amul</a>
                </li>
                <li>
                  <a href="product.html">Bingo</a>
                </li>
                <li>
                  <a href="product.html">Boost</a>
                </li>
                <li>
                  <a href="product.html">Durex</a>
                </li>
                <li>
                  <a href="product.html"> Maggi</a>
                </li>
                <li>
                  <a href="product.html">Glucon_D</a>
                </li>
                <li>
                  <a href="product.html">Horlicks</a>
                </li>
                <li>
                  <a href="product2.html">Head & Shoulders</a>
                </li>
                <li>
                  <a href="product2.html">Dove</a>
                </li>
                <li>
                  <a href="product2.html">Dettol</a>
                </li>
                <li>
                  <a href="product2.html">Dabur</a>
                </li>
                <li>
                  <a href="product2.html">Colgate</a>
                </li>
                <li>
                  <a href="product.html">Coca_Cola</a>
                </li>
                <li>
                  <a href="product2.html">Closeup</a>
                </li>
                <li>
                  <a href="product2.html"> Cinthol</a>
                </li>
                <li>
                  <a href="product.html">Cadbury</a>
                </li>
                <li>
                  <a href="product.html">Bru</a>
                </li>
                <li>
                  <a href="product.html">Bournvita</a>
                </li>
                <li>
                  <a href="product.html">Tang</a>
                </li>
                <li>
                  <a href="product.html">Pears</a>
                </li>
                <li>
                  <a href="product.html">Oreo</a>
                </li>
                <li>
                  <a href="product.html"> Taj Mahal</a>
                </li>
                <li>
                  <a href="product.html">Sprite</a>
                </li>
                <li>
                  <a href="product.html">Thums Up</a>
                </li>
                <li>
                  <a href="product2.html">Fair & Lovely</a>
                </li>
                <li>
                  <a href="product2.html">Lakme</a>
                </li>
                <li>
                  <a href="product.html">Tata</a>
                </li>
                <li>
                  <a href="product2.html">Sunfeast</a>
                </li>
                <li>
                  <a href="product2.html">Sunsilk</a>
                </li>
                <li>
                  <a href="product.html">Patanjali</a>
                </li>
                <li>
                  <a href="product.html">MTR</a>
                </li>
                <li>
                  <a href="product.html">Kissan</a>
                </li>
                <li>
                  <a href="product2.html"> Lipton</a>
                </li>
              </ul>
            </div>
            {/* //brands */}
            {/* payment */}
            <div className={`${styles.sub_some} ${styles.child_momu}`}>
              <h5>Payment Method</h5>
              <ul>
                <li>
                  <img src="images/pay2.png" alt="" />
                </li>
                <li>
                  <img src="images/pay5.png" alt="" />
                </li>
                <li>
                  <img src="images/pay1.png" alt="" />
                </li>
                <li>
                  <img src="images/pay4.png" alt="" />
                </li>
                <li>
                  <img src="images/pay6.png" alt="" />
                </li>
                <li>
                  <img src="images/pay3.png" alt="" />
                </li>
                <li>
                  <img src="images/pay7.png" alt="" />
                </li>
                <li>
                  <img src="images/pay8.png" alt="" />
                </li>
                <li>
                  <img src="images/pay9.png" alt="" />
                </li>
              </ul>
            </div>
          </div>

       </Container>
      </footer>
      <div className={styles.copy_right}>
        <Container>
          <p>
            © 2021 Grocery Shoppy. All rights reserved | Developed by
            <a href="http://w3layouts.com"> Dipu.</a>
          </p>
        </Container>
      </div>
    </>
  );
}

export default Footer;
