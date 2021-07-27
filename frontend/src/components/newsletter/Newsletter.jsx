import React from "react";
import styles from './Newsletter.module.css'

function Newsletter() {
  return (
    <>
      <div className="footer-top">
        <div className="container-fluid">
          <div className="col-xs-8 agile-leftmk">
            <h2>Get your Groceries delivered from local stores</h2>
            <p>Free Delivery on your first order!</p>
            <form action="/" method="post">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                required=""
              />
              <input type="submit" value="Subscribe" />
            </form>
            <div className="newsform-w3l">
              <span className="fa fa-envelope-o" aria-hidden="true"></span>
            </div>
          </div>
          <div className="col-xs-4 w3l-rightmk">
            <img src="images/tab3.png" alt=" " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter
