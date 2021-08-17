import { Component } from "solid-js"
import logo from "../logo.svg"

export const Header: Component = () => {
  return (
    <header class="bg-blue-600 text-white shadow">
      <div class="container mx-auto flex justify-between p-4">
        <h1 class="flex items-center">
          <img class="mr-2 h-10 filter drop-shadow" src={logo} alt="Store Logo" />
          <span class="text-lg font-bold whitespace-nowrap">My Store&trade;</span>
        </h1>
        <nav class="flex items-center">
          <a class="font-bold ml-4 hover:underline" href="#">Home</a>
          <a class="ml-4 hover:underline" href="#">About</a>
        </nav>
      </div>
    </header>
  )
}
