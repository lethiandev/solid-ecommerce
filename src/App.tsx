import type { Component } from "solid-js"

import logo from "./logo.svg"
import styles from "./App.module.css"

const App: Component = () => {
  return (
    <div class="text-center">
      <header class="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-2xl">
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class="text-purple-500"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default App
