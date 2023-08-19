import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types"

function NavBar({ title }) {
  return (
    <nav className="navbar mb12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="container mx-auto">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end" />
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
        </div>
        <div className="flex justify-end">
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

NavBar.defaultProps = {
  title: "GithubFinder",
}

NavBar.propTypes = {
  title: PropTypes.string,
}

export default NavBar
