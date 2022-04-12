import React from 'react'

const Users = ({users}) => {

  return (
    <div>
      <table className="table table-stripped mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.azam_id}>
              <td >{user.azam_id}</td>
              <td >{user.azam_user}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Users