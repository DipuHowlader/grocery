import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import styles from './Carousel.module.css'


class Carousel extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    // {styles.myCarousel} 
    return (
      <>
        <div className={`${styles.carousel} slide`} data-ride="carousel">
          <div role="listbox">
            <Slider {...settings}>
              <div className={styles.item}>
                <Container>
                <div className={styles.carousel__caption}>
                    <h3>
                      Big
                      <span>Save</span>
                    </h3>
                    <p>
                      Get flat
                      <span>10%</span> Cashback
                    </p>
                    <a className={styles.button2} href="product.html">
                      Shop Now{" "}
                    </a>
                  </div>
                </Container>
              </div>

              <div className={styles.item}>
                <Container>
                  <div className={styles.carousel__caption}>
                    <h3>
                      Healthy
                      <span>Saving</span>
                    </h3>
                    <p>
                      Get Upto
                      <span>30%</span> Off
                    </p>
                    <a className={styles.button2} href="product.html">
                      Shop Now{" "}
                    </a>
                  </div>
                </Container>
              </div>

            <div className={styles.item}>
              <Container>
                <div className={styles.carousel__caption}>
                      <h3>
                        Today
                        <span>Discount</span>
                      </h3>
                      <p>
                        Get Now
                        <span>40%</span> Discount
                      </p>
                      <a className={styles.button2} href="product.html">
                        Shop Now{" "}
                      </a>
                    </div>
              </Container>
              </div>
              
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
