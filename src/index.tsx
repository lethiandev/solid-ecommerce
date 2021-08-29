import { render } from "solid-js/web"
import { Router } from "solid-app-router"

import "./index.css"
import App from "./App"

const isProduction = process.env.NODE_ENV === "production"
const routerBase = isProduction ? "solid-ecommerce" : ""

const rootElement = document.getElementById("root")!
render(
  () => (
    <Router base={routerBase}>
      <App />
    </Router>
  ),
  rootElement
)
