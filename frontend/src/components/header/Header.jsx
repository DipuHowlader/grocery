import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from './Header.module.css'

function Header() {
  return (
    <>
      {/* top-header */}
      <div className={styles.header__most__top}>
        <p>Grocery Offer Zone Top Deals & Discounts</p>
      </div>
      {/* end top-header */}

      <div className={styles.header__bot}>
        <div className="header-bot_inner_wthreeinfo_header_mid">
          
          <Row>
            <Col md={4} className={styles.logo__agile}>
              <h1>
                <a href="index.html">
                  <span>G</span>rocery
                  <span>S</span>hoppy
                  <img src="images/logo2.png" alt=" " />
                </a>
              </h1>
            </Col>

            {/* header-bot */}

            <Col md={8} className={styles.header}>
              {/* header lists */}
              <ul>
                <li>
                  <a
                    className="play-icon popup-with-zoom-anim"
                    href="/small-dialog1"
                  >
                    <span
                      className="fa fa-map-marker"
                      aria-hidden="true"
                    ></span>{" "}
                    Shop Locator
                  </a>
                </li>
                <li>
                  <a href="/" data-toggle="modal" data-target="/myModal1">
                    <span className="fa fa-truck" aria-hidden="true"></span>
                    Track Order
                  </a>
                </li>
                <li>
                  <span className="fa fa-phone" aria-hidden="true"></span> 001
                  234 5678
                </li>
                <li>
                  <a href="/" data-toggle="modal" data-target="/myModal1">
                    <span
                      className="fa fa-unlock-alt"
                      aria-hidden="true"
                    ></span>{" "}
                    Sign In{" "}
                  </a>
                </li>
                <li>
                  <a href="/" data-toggle="modal" data-target="/myModal2">
                    <span
                      className="fa fa-pencil-square-o"
                      aria-hidden="true"
                    ></span>{" "}
                    Sign Up{" "}
                  </a>
                </li>
              </ul>
              {/* //header lists search */}


              <div className={styles.agileits__search}>
                <form action="/" method="post">
                  <input
                    name="Search"
                    type="search"
                    placeholder="How can we help you today?"
                    required=""
                  />
                  <button
                    type="submit"
                    className={styles.btn__default}
                    aria-label="Left Align"
                  >
                    <span className="fa fa-search" aria-hidden="true">
                      {" "}
                    </span>
                  </button>
                </form>
              </div>
              {/* end search */}

              {/* cart details  */}
              <div className={styles.top__nav__right}>
                <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                  <form action="/" method="post" className="last">
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <button
                      className={styles.w3view__cart}
                      type="submit"
                      name="submit"
                      value=""
                    >
                      <i
                        className="fa fa-cart-arrow-down"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </form>
                </div>
              </div>
              {/* end cart details */}

            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Header;
