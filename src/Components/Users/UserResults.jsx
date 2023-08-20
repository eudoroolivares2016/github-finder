import React, { useEffect, useState } from "react"
import Spinner from "../Layout/Spinner"
import UserItem from "../UserItem"

function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
    // why do we have to do this?
    const data = await response.json()
    console.log("🚀 ~ file: UserResults.jsx:15 ~ fetchUsers ~ data:", data)
    setUsers(data)
    setLoading(false)
  }

  // When page loads hit the github api for a list of users
  useEffect(
    () => () => {
      fetchUsers()
    },
    [],
  )

  if (!loading) {
    return (
      <div className="grid grid-cols-1 grap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <div>
            <UserItem key={user.id} user={user} />
          </div>
        ))}
      </div>
    )
  }

  return <Spinner />
}

export default UserResults
