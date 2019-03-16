import React from "react"
import ReactDOM from "react-dom"

import Pet from "./pet"

class App extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "CITR"),
      React.createElement(Pet, {
        name: "Gizzer",
        animal: "Dog",
        breed: "Pug"
      }),
      React.createElement(Pet, {
        name: "Frank",
        animal: "Cat",
        breed: "Tortiseshell"
      }),
      React.createElement(Pet, {
        name: "Bessie",
        animal: "Dog",
        breed: "Labrador"
      })
    ])
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
