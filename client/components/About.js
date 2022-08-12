import React from "react";
import { Link } from "react-router-dom";

export class About extends React.Component {
  render() {
    return (
      <div>
        <section className="contact-header">About</section>
        <article className="contact-desc">
          <p className="about-p">
            Thanks for stopping by! Here at Baked By Fullstack, we guarantee top
            quality products at affordable prices. Our products are freshly
            baked everyday with quality as our top priority. Each baked good is
            handcrafted with love that can be tasted in every bite. In attempts
            at reducing food waste, we've teamed up with local organizations to
            donate our unsold products. We can't wait for you to give us a try!
          </p>
          <br />
          <br />
        </article>
        <p className="secret-recipe">Our Secret Ingredients 👀</p>
        <p className="s-r-2">Instructions can be found <Link to={{ pathname: "https://github.com/2206-fsa-gs-team-gemini/baked" }} target="_blank" className="footer-link">here</Link> or in the <span style={{ color: '#d49090' }}>Recipe</span> tab on the bottom of the page</p>
        <div className="slidershow">
          <section id="slider">
            <input type="radio" name="slider" id="s1" defaultChecked />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />
            <input type="radio" name="slider" id="s6" />
            <input type="radio" name="slider" id="s7" />
            <input type="radio" name="slider" id="s8" />

            <label htmlFor="s1" id="slide1">
              <img
                className="js-logo"
                alt="javascript"
                src="http://powerforallats.com/wp-content/uploads/2016/03/js-logo.png"
              />
            </label>
            <label htmlFor="s2" id="slide2">
              <img
                className="react-js-logo"
                alt="react js"
                src="https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png"
              />
            </label>
            <label htmlFor="s3" id="slide3">
              <img
                className="redux-js-logo"
                alt="redux js"
                src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
              />
            </label>
            <label htmlFor="s4" id="slide4">
              <img
                className="express-js-logo"
                alt="express js"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png"
              />
            </label>
            <label htmlFor="s5" id="slide5">
              <img
                className="sequelize-logo"
                alt="sequelize"
                src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-ar21.png"
              />
            </label>
            <label htmlFor="s6" id="slide6">
              <img
                className="postgres-logo"
                alt="postgreSQL"
                src="https://www.unixmen.com/wp-content/uploads/2017/07/postgresql-logo.png"
              />
            </label>
            <label htmlFor="s7" id="slide7">
              <img
                className="css-logo"
                alt="css"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
              />
            </label>
            <label htmlFor="s8" id="slide8">
              <img
                className="html-logo"
                alt="html"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9v00g4XP1X0sFzxp64FIBSIgchtoRkAZSj_fjzq75u16gd3RcOmWYHJazTTHc6WSt30&usqp=CAU"
              />
            </label>
          </section>
          <br /><br /><br />
        </div>
      </div>
    );
  }
}

export default About;
