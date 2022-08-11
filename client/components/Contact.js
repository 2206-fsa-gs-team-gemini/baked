// import React from "react";
// import { Link } from "react-router-dom";

// export class Contact extends React.Component {
//   render() {
//     return (
//       <div>
//         <section className="grid-section">Contact</section>
//         <article className="contact">
//           <p className="contact-desc">
//             Obviously, Baked By Fullstack isn't a real bakery and unfortunately,
//             we don't sell any of the products we have listed.
//           </p>
//           <p className="contact-desc">
//             The good news is that the developers of this e-commerce site can be
//             contacted!
//           </p>
//           <br />
//           <br />

//           <h3 className="contact-desc">Our Bakers:</h3>

//           <div className="members">
//             <ul>
//               <li>
//                 <div className="team-member">
//                   <div className="team-member-profile">
//                     <img
//                       src="https://avatars.githubusercontent.com/u/101421813?v=4"
//                       className="team-member-image"
//                     />
//                   </div>
//                   <div className="member-info">
//                     <h4 className="team-member-name">Nicole Hong</h4>
//                     <div className="github">
//                       <Link
//                         to={{ pathname: "https://github.com/nickyjhong" }}
//                         target="_blank"
//                         className="team-member-link"
//                       >
//                         Github
//                       </Link>
//                     </div>
//                     <br />
//                     <div className="linkedin">
//                       <Link
//                         to={{
//                           pathname: "https://www.linkedin.com/in/nicolejhong/",
//                         }}
//                         target="_blank"
//                         className="team-member-link"
//                       >
//                         LinkedIn
//                       </Link>
//                     </div>
//                     <br />
//                     <br />
//                   </div>
//                 </div>
//               </li>

//               <div className="team-member">
//                   <img
//                     src="https://avatars.githubusercontent.com/u/41312534?v=4"
//                     className="team-member-image"
//                   ></img>
//                 <div className="another-div">
//                   <span style={{ top: "50px" }}>
//                     <div
//                       className="name-and-links"
//                       style={{
//                         position: "absolute",
//                         top: "50rem;",
//                         left: "22rem",
//                       }}
//                     >
//                       <h4 className="team-member-name">Cherry Xu</h4>
//                       <div className="team-member-link">
//                         <Link
//                           to={{ pathname: "https://github.com/mscherryxu" }}
//                           target="_blank"
//                         >
//                           Github
//                         </Link>
//                         <br />
//                         <Link
//                           to={{
//                             pathname:
//                               "https://www.linkedin.com/in/cherry-xu-rd-cdn/",
//                           }}
//                           target="_blank"
//                         >
//                           LinkedIn
//                         </Link>
//                       </div>
//                       <br />
//                       <br />
//                     </div>
//                   </span>
//                 </div>
//               </div>

//               <div className="team-member">
//                 <img
//                   src="https://media-exp1.licdn.com/dms/image/C4D03AQF40Wuek0HEcw/profile-displayphoto-shrink_200_200/0/1584683546842?e=1665619200&v=beta&t=0paII6E8NHIhjjOqwt7ppmuwPcmHltZW8WLrzZN-5po"
//                   className="team-member-image"
//                 ></img>
//                 <h4 className="team-member-name">Amy Wong</h4>
//                 <Link
//                   to={{ pathname: "https://github.com/amyawong" }}
//                   target="_blank"
//                   className="team-member-link"
//                 >
//                   Github
//                 </Link>
//                 <br />
//                 <Link
//                   to={{
//                     pathname: "https://www.linkedin.com/in/amyawong/",
//                   }}
//                   target="_blank"
//                   className="team-member-link"
//                 >
//                   LinkedIn
//                 </Link>
//                 <br />
//                 <br />
//               </div>

//               <div className="team-member">
//                 <img
//                   src="https://media-exp1.licdn.com/dms/image/C4E03AQEQ-OfyTk-7cg/profile-displayphoto-shrink_200_200/0/1561991819331?e=1665619200&v=beta&t=O_-Y2Z2Jnn3XmnTRAmNM8E7rFjEvmTgDras8XMyIXMc"
//                   className="team-member-image"
//                 ></img>
//                 <h4 className="team-member-name">Chris Tomshack</h4>
//                 <Link
//                   to={{ pathname: "https://github.com/Ctomshack" }}
//                   target="_blank"
//                   className="team-member-link"
//                 >
//                   Github
//                 </Link>
//                 <br />
//                 <Link
//                   to={{
//                     pathname: "https://www.linkedin.com/in/christomshack/",
//                   }}
//                   target="_blank"
//                   className="team-member-link"
//                 >
//                   LinkedIn
//                 </Link>
//                 <br />
//                 <br />
//               </div>
//             </ul>
//           </div>

//           {/* <h3 className="contact-desc">Special Thanks To:</h3>
//           <div className="team-member">
//             <img src="" className="team-member-image"></img>
//             <h4 className="team-member-name"></h4>
//             <Link
//               to={{ pathname: "https://github.com/" }}
//               target="_blank"
//               className="team-member-link"
//             >
//               Github
//             </Link>
//             <br />
//             <Link
//               to={{
//                 pathname: "https://www.linkedin.com/in/",
//               }}
//               target="_blank"
//               className="team-member-link"
//             >
//               LinkedIn
//             </Link>
//             <p></p>
//           </div> */}
//         </article>
//         <br />
//         <br />
//         <br />
//       </div>
//     );
//   }
// }

// export default Contact;

// import React from "react";
// import { Link } from "react-router-dom";

// export class Contact extends React.Component {
//   render() {
//     return (
//       <div className="members">
//         <div className="container">

//           <div className="card">
//             <div className="content">
//               <div className="imgBx">
//                 <img src="https://avatars.githubusercontent.com/u/101421813?v=4" />
//               </div>
//               <div className="contentBx">
//                 <h4>Nicole Hong</h4>
//               </div>
//               <div className="sci">
//                 <Link
//                   to={{ pathname: "https://github.com/nickyjhong" }}
//                   target="_blank"
//                 >
//                   Github
//                 </Link>
//                 <Link
//                   to={{
//                     pathname: "https://www.linkedin.com/in/nicolejhong/",
//                   }}
//                   target="_blank"
//                 >
//                   LinkedIn
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="card">
//             <div className="content">
//               <div className="imgBx">
//                 {/* <img src="https://avatars.githubusercontent.com/u/101421813?v=4" className="imgBx"/> */}
//               </div>
//               <div className="contentBx">
//                 <h4>Nicole Hong</h4>
//               </div>
//               <div className="sci">
//                 <Link
//                   to={{ pathname: "https://github.com/nickyjhong" }}
//                   target="_blank"
//                 >
//                   Github
//                 </Link>
//                 <Link
//                   to={{
//                     pathname: "https://www.linkedin.com/in/nicolejhong/",
//                   }}
//                   target="_blank"
//                 >
//                   LinkedIn
//                 </Link>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     );
//   }
// }

// export default Contact;

import React from "react";
import { Link } from "react-router-dom";

export class Contact extends React.Component {
  render() {
    return (
      <div className="members">
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://avatars.githubusercontent.com/u/101421813?v=4" />
              </div>
              <div className="contentBx">
                <h4>Nicole Hong</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <Link
                    to={{ pathname: "https://github.com/nickyjhong" }}
                    target="_blank"
                    className="github"
                  >
                    Github
                  </Link>
                </div>
                <div className="linkedin">
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/nicolejhong/",
                    }}
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://avatars.githubusercontent.com/u/41312534?v=4" />
              </div>
              <div className="contentBx">
                <h4>Cherry Xu</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <Link
                    to={{ pathname: "https://github.com/mscherryxu" }}
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
                <div className="linkedin">
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/cherry-xu-rd-cdn/",
                    }}
                    target="_blank"
                    className="linkedin"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF40Wuek0HEcw/profile-displayphoto-shrink_200_200/0/1584683546842?e=1665619200&v=beta&t=0paII6E8NHIhjjOqwt7ppmuwPcmHltZW8WLrzZN-5po" />
              </div>
              <div className="contentBx">
                <h4>Amy Wong</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <Link
                    to={{ pathname: "https://github.com/amyawong" }}
                    target="_blank"
                    className="github"
                  >
                    Github
                  </Link>
                </div>
                <div className="linkedin">
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/amyawong/",
                    }}
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEQ-OfyTk-7cg/profile-displayphoto-shrink_200_200/0/1561991819331?e=1665619200&v=beta&t=O_-Y2Z2Jnn3XmnTRAmNM8E7rFjEvmTgDras8XMyIXMc" />
              </div>
              <div className="contentBx">
                <h4>Chris Tomshack</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <Link
                    to={{ pathname: "https://github.com/Ctomshack" }}
                    target="_blank"
                    className="github"
                  >
                    Github
                  </Link>
                </div>
                <div className="linkedin">
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/christomshack/",
                    }}
                    target="_blank"
                    className="linkedin"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
