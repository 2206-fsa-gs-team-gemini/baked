// import React from "react";

// export class About extends React.Component {
//   render() {
//     return (
//       <div>
//         <section className="grid-section">About</section>
//         <article className="about">
//           <p>
//             Thanks for stopping by! Here at Baked By Fullstack, we guarantee top
//             quality products at affordable prices. Our products are freshly
//             baked everyday with quality as our top priority. Each baked good is
//             handcrafted with love that can be tasted in every bite. In attempts
//             at reducing food waste, we've teamed up with local organizations to
//             donate our unsold products. We can't wait for you to give us a try!
//           </p>
//           <br />
//           <br />
//         </article>
//         <h4>Our Secret Recipe 🤫</h4>

//         <div className="slidershow middle">
//           <div className="slides">
//             <input type="radio" name="r" id="r1" checked />
//             <input type="radio" name="r" id="r2" />
//             <input type="radio" name="r" id="r3" />
//             <input type="radio" name="r" id="r4" />
//             <input type="radio" name="r" id="r5" />
//             <input type="radio" name="r" id="r6" />
//             <input type="radio" name="r" id="r7" />
//             <input type="radio" name="r" id="r8" />

//             <div className="slide">
//               <img
//                 src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"
//                 className="secret-recipe"
//               />
//             </div>
//             <div className="slide">
//               <img
//                 src="https://d12i7q49526cmu.cloudfront.net/media/original_images/React_Logo.png"
//                 className="secret-recipe"
//               />
//             </div>
//             <div className="slide">
//               <img
//                 src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
//                 className="secret-recipe"
//               />
//             </div>
//             <div className="slide">
//               <img
//                 src="https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png"
//                 className="secret-recipe"
//               />
//             </div>
//             <div className="slide">
//               <img
//                 src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-ar21.png"
//                 className="secret-recipe"
//               />
//             </div>
//             <div className="slide">
//               <img
//                 src="https://www.unixmen.com/wp-content/uploads/2017/07/postgresql-logo.png"
//                 className="secret-recipe"
//               />
//             </div>
//             <div className="slide">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
//                 className="secret-recipe"
//               />
//             </div>
//             <div className="slide">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9v00g4XP1X0sFzxp64FIBSIgchtoRkAZSj_fjzq75u16gd3RcOmWYHJazTTHc6WSt30&usqp=CAU"
//                 className="secret-recipe"
//               />
//             </div>
//           </div>

//           <div className="navigation">
//             <label for="r1" className="bar"></label>
//             <label for="r2" className="bar"></label>
//             <label for="r3" className="bar"></label>
//             <label for="r4" className="bar"></label>
//             <label for="r5" className="bar"></label>
//             <label for="r6" className="bar"></label>
//             <label for="r7" className="bar"></label>
//             <label for="r8" className="bar"></label>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default About;

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
