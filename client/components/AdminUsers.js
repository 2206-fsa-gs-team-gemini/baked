import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/allUsers';

export class AdminUsers extends Component {
  async componentDidMount() {
    await this.props.getAllUsers();
  }

  render() {
    const users = this.props.users;
    return (
      <div>
        <p style={{ textAlign: 'center' }} className="admins-only">Accounts</p>
        <table className="av-table">
            <tr>
              <th className='av-table-heading'>Customer ID</th>
              <th className='av-table-heading'>First Name</th>
              <th className='av-table-heading'>Last Name</th>
              <th className='av-table-heading'>Email</th>
              <th className='av-table-heading'>Address</th>
            </tr>
        {users.map((user) => (
            <tr key={user.id}  className='av-table-row'>
              <td className='av-table-data'>{user.id}</td>
              <td className='av-table-data'>{user.firstName}</td>
              <td className='av-table-data'>{user.lastName}</td>
              <td className='av-table-data'>{user.email}</td>
              <td className='av-table-data'>{user.address}</td>
            </tr>
        ))}
        <br />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
