import React from "react";

export class About extends React.Component {
  render() {
    return (
      <div>
        <section className="grid-section">About</section>
        <article className="about">
          <p>
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
        <h4>Our Secret Recipe 🤫</h4>

        <div className="carousel">
          <ul className="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li className="slide-container">
              <div className="slide-image">
                <img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" />
              </div>

              <div className="carousel-controls">
                <label for="img-3" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-2" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />
            <li className="slide-container">
              <div className="slide-image">
                <img src="https://d12i7q49526cmu.cloudfront.net/media/original_images/React_Logo.png" />
              </div>
              <div className="carousel-controls">
                <label for="img-1" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-3" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>

            <input type="radio" nameName="radio-buttons" id="img-3" />
            <li className="slide-container">
              <div className="slide-image">
                <img src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" />
              </div>
              <div className="carousel-controls">
                <label for="img-2" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-1" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <div className="carousel-dots">
              <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
              <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
              <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
