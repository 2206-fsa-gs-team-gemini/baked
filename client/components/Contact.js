import React from 'react';
import { Link } from 'react-router-dom';

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="grid-section">Contact</section>
        <article className="contact">
          <p className="contact-">
            Obviously, Baked By Fullstack isn't a real bakery and unfortunately,
            we don't sell any of the products we have listed.
          </p>
          <p className="contact-desc">
            The good news is that the developers of this e-commerce site can be
            contacted!
          </p>
          <br />
          <br />

          <h3 className="contact-desc">Our Bakers:</h3>
          <div className="team-member">
            <img
              src="https://avatars.githubusercontent.com/u/101421813?v=4"
              className="team-member-image"
            ></img>
            <h4 className="team-member-name">Nicole Hong</h4>
            <Link
              to={{ pathname: 'https://github.com/nickyjhong' }}
              target="_blank"
              className="team-member-link"
            >
              Github
            </Link>
            <br />
            <Link
              to={{
                pathname: 'https://www.linkedin.com/in/nicolejhong/',
              }}
              target="_blank"
              className="team-member-link"
            >
              LinkedIn
            </Link>
            <br />
            <br />
          </div>

          <div className="team-member">
            <img
              src="https://avatars.githubusercontent.com/u/41312534?v=4"
              className="team-member-image"
            ></img>
            <h4 className="team-member-name">Cherry Xu</h4>
            <Link
              to={{ pathname: 'https://github.com/mscherryxu' }}
              target="_blank"
              className="team-member-link"
            >
              Github
            </Link>
            <br />
            <Link
              to={{
                pathname: 'https://www.linkedin.com/in/cherry-xu-rd-cdn/',
              }}
              target="_blank"
              className="team-member-link"
            >
              LinkedIn
            </Link>
            <br />
            <br />
          </div>

          <div className="team-member">
            <img
              src="https://avatars.githubusercontent.com/u/103911065?v=4"
              className="team-member-image"
            ></img>
            <h4 className="team-member-name">Amy Wong</h4>
            <Link
              to={{ pathname: 'https://github.com/amyawong' }}
              target="_blank"
              className="team-member-link"
            >
              Github
            </Link>
            <br />
            <Link
              to={{
                pathname: 'https://www.linkedin.com/in/amyawong/',
              }}
              target="_blank"
              className="team-member-link"
            >
              LinkedIn
            </Link>
            <br />
            <br />
          </div>

          <div className="team-member">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEQ-OfyTk-7cg/profile-displayphoto-shrink_200_200/0/1561991819331?e=1665619200&v=beta&t=O_-Y2Z2Jnn3XmnTRAmNM8E7rFjEvmTgDras8XMyIXMc"
              className="team-member-image"
            ></img>
            <h4 className="team-member-name">Chris Tomshack</h4>
            <Link
              to={{ pathname: 'https://github.com/Ctomshack' }}
              target="_blank"
              className="team-member-link"
            >
              Github
            </Link>
            <br />
            <Link
              to={{
                pathname: 'https://www.linkedin.com/in/christomshack/'
              }}
              target="_blank"
              className="team-member-link"
            >
              LinkedIn
            </Link>
            <br />
            <br />
          </div>
          {/* <h3 className="contact-desc">Special Thanks To:</h3>
          <div className="team-member">
            <img src="" className="team-member-image"></img>
            <h4 className="team-member-name"></h4>
            <Link
              to={{ pathname: "https://github.com/" }}
              target="_blank"
              className="team-member-link"
            >
              Github
            </Link>
            <br />
            <Link
              to={{
                pathname: "https://www.linkedin.com/in/",
              }}
              target="_blank"
              className="team-member-link"
            >
              LinkedIn
            </Link>
            <p></p>
          </div> */}
        </article>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Contact;
