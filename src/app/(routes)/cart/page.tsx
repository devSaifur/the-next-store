'use client'

import CartItem from '@/components/cart/cart-item'
import Summery from '@/components/cart/summary'
import Container from '@/components/ui/container'
import { useCart } from '@/hooks/use-cart'
import { Suspense } from 'react'

export default function CartPage() {
  const { items } = useCart()

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {items.length === 0 && (
                <p className="text-neutral-500">No items added to cart.</p>
              )}
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Suspense>
              <Summery />
            </Suspense>
          </div>
        </div>
      </Container>
    </div>
  )
}
