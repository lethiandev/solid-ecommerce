import { Component, createSignal, For, Show } from "solid-js"
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
    <Show when={!loading()} fallback={<Loader />}>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <For each={products()}>{product => <ShopItem product={product} />}</For>
      </div>
    </Show>
  )
}
