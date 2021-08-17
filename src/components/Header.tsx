import { Component } from "solid-js"
import { Link, NavLink } from "solid-app-router"

import logo from "../logo.svg"

export const Header: Component = () => {
  return (
    <header class="bg-blue-600 text-white shadow">
      <div class="container mx-auto flex justify-between p-4">
        <h1>
          <Link href="/" class="flex items-center">
            <img
              class="mr-2 h-10 filter drop-shadow"
              src={logo}
              alt="Store Logo"
            />
            <span class="text-lg font-bold whitespace-nowrap">
              My Store&trade;
            </span>
          </Link>
        </h1>
        <nav class="flex items-center">
          <NavLink
            href="/"
            activeClass="font-bold"
            end={true}
            class="ml-4 hover:underline"
          >
            Home
          </NavLink>
          <NavLink
            href="/about"
            activeClass="font-bold"
            class="ml-4 hover:underline"
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
