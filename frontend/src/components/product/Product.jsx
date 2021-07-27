import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./Product.module.css";

// productItem
const ProductItem = (props) => {
  return (
    <>
      <Col md={4} className={styles.product__men}>
        <div className={`simpleCart__shelfItem ${styles.men__pro__item}`}>
          <div className="men__thumb__item">
            <img src="images/m1.jpg" alt="" />
            <div className={styles.men__cart__pro}>
              <div className={styles.inner__men__cart__pro}>
                <a
                  href="single.html"
                  className={styles.link__product__add__cart}
                >
                  Quick View
                </a>
              </div>
            </div>
            <span className={styles.product__new__top}>New</span>
          </div>
          <div className={styles.item__info__product}>
            <h4>
              <a href="single.html">{props.productName}, 100g</a>
            </h4>
            <div className={styles.info__product__price}>
              <span className={styles.item__price}>${props.price}</span>
              <del>$280.00</del>
            </div>
            {/* snipcart-details top_brand_home_details item_add single-item hvr-outline-out */}
            <div className="snipcart__details">
              <form action="/" method="post">
                <fieldset>
                  <input type="hidden" name="cmd" value="_cart" />
                  <input type="hidden" name="add" value="1" />
                  <input type="hidden" name="business" value=" " />
                  <input type="hidden" name="item_name" value="Almonds, 100g" />
                  <input type="hidden" name="amount" value="149.00" />
                  <input type="hidden" name="discount_amount" value="1.00" />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input type="hidden" name="return" value=" " />
                  <input type="hidden" name="cancel_return" value=" " />
                  <input
                    type="submit"
                    name="submit"
                    value="Add to cart"
                    className="button"
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

function Product() {
  return (
    <div>
      <div className={styles.ads__grid}>
        <Container>
          <h3 className="tittle__w3l">
            Our Top Products
            <span className="heading__style">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </h3>

          <Row>
            {/* product left */}
            <Col md={3} className = {styles.side__bar}>
              {/* search */}
              <div className={styles.search__hotel}>
                <h3 className={styles.agileits__sear__head}>Search Here..</h3>
                <form action="/" method="post">
                  <input
                    type="search"
                    placeholder="Product name..."
                    name="search"
                    required=""
                  />
                  <input type="submit" value=" " />
                </form>
              </div>

              {/* price range */}
              <div className={styles.range}>
                <h3 className={styles.agileits__sear__head}>Price range</h3>
                <ul className={styles.dropdown__menu6}>
                  <li>
                    <div id={styles.slider__range}></div>
                    <input type="text" id="amount" />
                  </li>
                </ul>
              </div>

              {/* food preference */}
              <div className={styles.left__side}>
                <h3 className={styles.agileits__sear__head}>Food Preference</h3>
                <ul>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>Vegetarian</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>Non-Vegetarian</span>
                  </li>
                </ul>
              </div>

              {/* discounts */}
              <div className={styles.left__side}>
                <h3 className={styles.agileits__sear__head}>Discount</h3>
                <ul>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>5% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>10% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>20% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>30% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>50% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>60% or More</span>
                  </li>
                </ul>
              </div>

              {/* reviews */}
              <div className={styles.customer__rev}>
                <h3 className={styles.agileits__sear__head}>Customer Review</h3>
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <span>5.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <span>4.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <span>3.5</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <span>3.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <span>2.5</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* cuisine  */}
              <div className={styles.left__side}>
                <h3 className={styles.agileits__sear__head}>Cuisine</h3>
                <ul>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>South American</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>French</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>Greek</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>Chinese</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>Japanese</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>Italian</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>Mexican</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>Thai</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span>Indian</span>
                  </li>
                  <li>
                    <input type="checkbox" className={styles.checked} />
                    <span> Spanish </span>
                  </li>
                </ul>
              </div>

              {/* deals */}
              <div className={`${styles.left__side} ${styles.deal__leftmk}`}>
                <h3 className={styles.agileits__sear__head}>Special Deals</h3>

                
                <div className={styles.special__sec1}>
                  <Col xs={4} className={styles.img__deals}>
                    <img src="images/d2.jpg" alt="" />
                  </Col>

                  <Col xs={8} className={styles.img__deal1}>
                    <h3>Lay's Potato Chips</h3>
                    <a href="single.html">$18.00</a>
                  </Col>
                </div>

                <div className={styles.special__sec1}>
                  <Col xs={4} className={styles.img__deals}>
                    <img src="images/d1.jpg" alt="" />
                  </Col>

                  <Col xs={8} className={styles.img__deal1}>
                    <h3>Bingo Mad Angles</h3>
                    <a href="single.html">$9.00</a>
                  </Col>
                </div>

                <div className={styles.special__sec1}>
                  <Col xs={4} className={styles.img__deals}>
                    <img src="images/d4.jpg" alt="" />
                  </Col>

                  <Col xs={8} className={styles.img__deal1}>
                    <h3>Tata Salt</h3>
                    <a href="single.html">$15.00</a>
                  </Col>
                </div>

                <div className={styles.special__sec1}>
                  <Col xs={4} className={styles.img__deals}>
                    <img src="images/d5.jpg" alt="" />
                  </Col>

                  <Col xs={8} className={styles.img__deal1}>
                    <h3>Gujarat Dry Fruit</h3>
                    <a href="single.html">$525.00</a>
                  </Col>
                </div>

                <div className={styles.special__sec1}>
                  <Col xs={4} className={styles.img__deals}>
                    <img src="images/d3.jpg" alt="" />
                  </Col>

                  <Col xs={8} className={styles.img__deal1}>
                    <h3>Cadbury Dairy Milk</h3>
                    <a href="single.html">$149.00</a>
                  </Col>
                </div>
              </div>
            </Col>

            <Col md={9}>
              <div className="wrapper">
                {/* first section (nuts) */}
                <div className={styles.product__sec1}>
                  <h3 className={styles.heading__tittle}>Nuts</h3>
                  <Row>
                    <ProductItem productName="Almonds" price="200" />
                    <ProductItem productName="Cashew" price="200" />
                    <ProductItem productName="Pista..." price="520" />
                  </Row>
                </div>
                {/*  //first section (nuts) */}

                {/* second section (nuts special)  */}
                <div
                  className={`${styles.product__sec1} ${styles.product__sec2}`}
                >
                  <Col xs={7} className={styles.effect__bg}>
                    <h3 className="">Pure Energy</h3>
                    <h6>Enjoy our all healthy Products</h6>
                    <p>Get Extra 10% Off</p>
                  </Col>

                  <h3 className={styles.w3l__nut__middle}>Nuts & Dry Fruits</h3>
                  <Col xs={5} className={styles.bg__right__nut}>
                    <img src="images/nut1.png" alt="" />
                  </Col>
                </div>
                {/* //second section (nuts special) */}

                {/* third section (oils)  */}
                <div className={styles.product__sec1}>
                  <h3 className={styles.heading__tittle}>Oils</h3>

                  <Row>
                    <ProductItem productName="Freedom Oil" price="78" />
                    <ProductItem productName="Saffola Gold" price="130" />
                    <ProductItem productName="Fortune Oil" price="399" />
                  </Row>
                </div>
                {/* //third section (oils)
					 fourth section (noodles) */}
                <div className={styles.product__sec1}>
                  <h3 className={styles.heading__tittle}>Pasta & Noodles</h3>

                  <Row>
                    <ProductItem productName="Freedom Oil" price="78" />
                    <ProductItem productName="Saffola Gold" price="130" />
                    <ProductItem productName="Fortune Oil" price="399" />
                  </Row>
                </div>
                {/* //fourth section (noodles) */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Product;
