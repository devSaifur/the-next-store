'use client'

import { Button } from '@/components/ui/button'

import { TProduct } from '@/types'

import Currency from '@/components/currency'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'

export default function Info({ data }: { data: TProduct }) {
  const { addItem } = useCart()

  const onAddToCart = () => {
    addItem(data)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <Currency
          className="text-2xl text-gray-900"
          value={Number(data.price)}
        />
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="size-6 rounded-full border"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="gap-x-2 rounded-full">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  )
}
