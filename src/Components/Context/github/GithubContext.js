import { createContext, useReducer } from "react"
import githubReducer

from "../GithubReducer"
const GithubContext = createContext()
const REACT_APP_GITHUB_URL = "https://api.github.com"

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)
  const initialState = {
    users: [],
    loading: true
  }

  // [state, dispatch]
  // dispatch is used to dispatch an action in the reducer
  const [state, dispatch] = useReducer(githubReducer, initialState)


  const fetchUsers = async () => {
    const response = await fetch(`${REACT_APP_GITHUB_URL}/users`)
    // why do we have to do this?
    const data = await response.json()

    dispatch(
      {
        type: 'GET_USERS',
        payload: data
      }
    )


  }
  return <GithubContext.Provider value={{users: state.users, loading: state.loading, fetchUsers}}>
    {children}
  </GithubContext.Provider>

}

export default GithubContext
