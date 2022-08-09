import React from "react";
import { connect } from "react-redux";

export const Home = (props) => {
  const { firstName } = props;
  if (!firstName) {
    return (
      <div>
        <div className="welcome">Hello!</div>
      </div>
    );
  }
  return (
    <div>
      <div className="welcome">Hi {firstName}!</div>
    </div>
  );
};

const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
  };
};

export default connect(mapState)(Home);
