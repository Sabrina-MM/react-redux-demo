// we are going to use async.

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./redux/users/userActions";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      {userData &&
        userData.users &&
        userData.users.map((user) => {
          return <p>{user.name}</p>;
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
