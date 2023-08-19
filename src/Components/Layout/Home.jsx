import React from "react"

function Home() {
  return (
    <div>
      <h1> This is my header page</h1>
      {process.env.REACT_APP_GITHUB_URL}
      <div>Home</div>
    </div>
  )
}

export default Home
