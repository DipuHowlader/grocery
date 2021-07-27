import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Item = () => {
  return (
    <>
      <div className="w3l-specilamk">
        <div className="speioffer-agile">
          <a href="single.html">
            <img src="images/s5.jpg" alt="" />
          </a>
        </div>
        <div className="product-name-w3l">
          <h4>
            <a href="single.html">Sprite, 2.25L (Pack of 2)</a>
          </h4>
          <div className="w3l-pricehkj">
            <h6>$180.00</h6>
            <p>Save $30.00</p>
          </div>
          <div className="snipcart__details top_brand_home_details item_add single-item hvr-outline-out">
            <form action="/" method="post">
              <fieldset>
                <input type="hidden" name="cmd" value="_cart" />
                <input type="hidden" name="add" value="1" />
                <input type="hidden" name="business" value=" " />
                <input
                  type="hidden"
                  name="item_name"
                  value="Sprite, 2.25L (Pack of 2)"
                />
                <input type="hidden" name="amount" value="180.00" />
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
    </>
  );
};

class Offer extends React.Component {
  render() {
    
    const primaryOptions = {
        autoplay  : true,
        arrows    : false,
        type      : 'loop',
        perPage   : 3,
        speed     : 500,
        rewind      : true,
        perMove   : 1,
        gap       : '1rem',
        pagination: false,
        isNavigation: false,
    }

    return (
      <>
        <div className="featured-section" id="projects">
          <div className="container">
            <h3 className="tittle__w3l">
              Special Offers
              <span className="heading__style">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </h3>

            <div className="content-bottom-in">
            <Splide options = {primaryOptions}>
                <SplideSlide>
                   <Item></Item>
                </SplideSlide>

                <SplideSlide>
                   <Item></Item>
                </SplideSlide>

                <SplideSlide>
                   <Item></Item>
                </SplideSlide>

                <SplideSlide>
                   <Item></Item>
                </SplideSlide>

                <SplideSlide>
                   <Item></Item>
                </SplideSlide>

                <SplideSlide>
                    <Item />
                </SplideSlide>
                </Splide>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Offer;
