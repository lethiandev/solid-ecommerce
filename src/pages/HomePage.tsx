import { Component, createSignal } from "solid-js"
import { Header } from "../components/Header"
import { Loader } from "../components/Loader"
import { ShopItem } from "../components/ShopItem"
import { Product } from "../models/Product"

export const HomePage: Component = () => {
  const [loading, setLoading] = createSignal(true)
  const [products, setProducts] = createSignal<Product[]>([])

  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(items => {
      setProducts(items)
      setLoading(false)
    })

  return (
    <div class="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <div class="container mx-auto p-4 flex-grow relative">
        {loading() ? <Loader /> : null}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products().map(product => (
            <ShopItem product={product} />
          ))}
        </div>
      </div>
      <footer class="bg-gray-100 text-gray-500 text-center py-4">
        <span>My Store&trade; 2021&copy;</span>
      </footer>
    </div>
  )
}
