import React from "react"
import ReactDOM from "react-dom"

import Pet from "./pet"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>CITR</h1>
        <Pet name="Gizzer" animal="Dog" breed="Pug" />
        <Pet name="Frank" animal="Cat" breed="Tortiseshell" />
        <Pet name="Bessie" animal="Dog" breed="Labrador" />
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
