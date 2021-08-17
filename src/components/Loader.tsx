import { Component } from "solid-js"

export const Loader: Component = () => {
  return (
    <div class="absolute top-1/2 left-1/2 transform -translate-x-4 -translate-y-4">
      <span class="absolute block w-8 h-8 border-4 border-blue-600 rounded-full animate-ping"></span>
    </div>
  )
}
