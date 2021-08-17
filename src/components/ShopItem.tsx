import { Component } from "solid-js"
import { Product } from "../models/Product"

export const ShopItem: Component<{ product: Product }> = ({ product }) => {
  return (
    <div class="flex flex-col border p-4">
      <div class="flex justify-center h-32 p-4 -m-4 mb-0">
        <img class="max-h-full" src={product.image} alt={product.title} />
      </div>
      <div>
        <h2 class="font-bold mb-2">{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  )
}
