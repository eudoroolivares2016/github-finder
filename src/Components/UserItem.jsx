import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function UserItem({ user }) {
  const { avatar_url: avatarUrl, login: username } = user
  return (
    <div>
      <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items center space-x-4 card-body">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatarUrl} alt="" />
          </div>
          <h2 className="card-title">{username}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`users/${username}`}
          />
          Visit profile
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.node.isRequired,
}

export default UserItem
