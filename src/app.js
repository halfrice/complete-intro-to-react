import React from "react"
import ReactDOM from "react-dom"
import Results from "./results"
import Details from "./details"
import { Link, Router } from "@reach/router"

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">CoolPet</Link>
        </header>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
