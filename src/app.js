import React from "react"
import ReactDOM from "react-dom"
import Results from "./results"
import Details from "./details"
import Search from "./searchParams"
import { Link, Router } from "@reach/router"

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">CoolPet</Link>
        </header>
        <Router>
          <Search path="/search-params" />
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
