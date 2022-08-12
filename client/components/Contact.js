import React from "react";
import { Link } from "react-router-dom";

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="contact-header">Contact</section>
          <p className="contact-desc">
            Obviously, Baked By Fullstack isn't a real bakery and unfortunately,
            we don't sell any of the products we have listed.
          </p>
          <p className="contact-desc">
            The good news is that the developers of this e-commerce site can be
            contacted!
          </p>
          <br />

        <p className="bakers">The Bakers</p>
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
                    <Link
                      to={{ pathname: "https://github.com/nickyjhong" }}
                      target="_blank"
                    >
                      Github
                    </Link>
                    <br />
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

            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src="https://avatars.githubusercontent.com/u/41312534?v=4" />
                </div>
                <div className="contentBx">
                  <h4>Cherry Xu</h4>
                </div>
                <div className="sci">
                    <Link
                      to={{ pathname: "https://github.com/mscherryxu" }}
                      target="_blank"
                    >
                      Github
                    </Link>
                    <br />
                    <Link
                      to={{
                        pathname:
                          "https://www.linkedin.com/in/cherry-xu-rd-cdn/",
                      }}
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
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
                    <Link
                      to={{ pathname: "https://github.com/amyawong" }}
                      target="_blank"
                    >
                      Github
                    </Link>
                    <br />
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

            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEQ-OfyTk-7cg/profile-displayphoto-shrink_200_200/0/1561991819331?e=1665619200&v=beta&t=O_-Y2Z2Jnn3XmnTRAmNM8E7rFjEvmTgDras8XMyIXMc" />
                </div>
                <div className="contentBx">
                  <h4>Chris Tomshack</h4>
                </div>
                <div className="sci">
                    <Link
                      to={{ pathname: "https://github.com/Ctomshack" }}
                      target="_blank"
                    >
                      Github
                    </Link>
                    <br />
                    <Link
                      to={{
                        pathname: "https://www.linkedin.com/in/christomshack/",
                      }}
                      target="_blank"
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
