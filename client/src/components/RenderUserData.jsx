import React from 'react'

export default function ShowData(props) {
  
  const userdataJSX = props.userdata.map(user => {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.color}</td>
      </tr>
    )
  })
  
  return (
    <div>
      <table align="center">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Color</th>
        </tr>
        {userdataJSX}
      </table>
    </div>
  )
}
