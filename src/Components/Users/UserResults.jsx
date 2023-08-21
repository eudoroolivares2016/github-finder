import React, { useEffect, useContext } from "react"
import Spinner from "../Layout/Spinner"
import UserItem from "../UserItem"
import GithubContext from "../Context/github/GithubContext"

function UserResults() {

  const {users, loading, fetchUsers} = useContext(GithubContext)

  // When page loads hit the github api for a list of users
  useEffect(
    () => () => {
      fetchUsers()
    },
    []
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
