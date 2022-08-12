import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../store/allUsers";

export const Admin = () => {
  return (
    <div>
      <p className="admins-only">Admins Only</p>
      <div className="admin-view">
        <Link to={`/admin/users`}>
          <button className="admin-buttons">View All Users</button>
        </Link>
        <br />
        <br />
        <Link to={`/admin/products`}>
          <button className="admin-buttons">Edit A Product</button>
        </Link>
        <br />
        <br />
        <Link to={`/products/add`}>
          <button className="admin-buttons">Add A Product</button>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.allUsers,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
