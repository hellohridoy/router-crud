import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data);
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" style={{ margin: "2px" }}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    style={{ margin: "2px" }}
                  >
                    Delete
                  </Link>
                  <Link class="btn btn-danger" style={{ margin: "2px" }}>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
