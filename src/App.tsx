import type { Component } from "solid-js"
import { Route, Routes } from "solid-app-router"

import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage"

const App: Component = () => {
  return (
    <div class="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main class="container mx-auto p-4 flex-grow relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<p>Hello, world!</p>} />
        </Routes>
      </main>
      <footer class="bg-gray-100 text-gray-500 text-center py-4">
        <span>My Store&trade; 2021&copy;</span>
      </footer>
    </div>
  )
}

export default App
