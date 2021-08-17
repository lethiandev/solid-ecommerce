import { render } from "solid-js/web"
import { Router } from "solid-app-router"

import "./index.css"
import App from "./App"

const rootElement = document.getElementById("root")!
render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  rootElement
)
