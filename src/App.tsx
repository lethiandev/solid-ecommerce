import type { Component } from "solid-js"
import { Route, Router, Routes } from "solid-app-router"
import { HomePage } from "./pages/HomePage"

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
