'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'
import axios from 'axios'

import { Button } from '@/components/ui/button'
import Currency from '@/components/currency'
import { useSearchParams } from 'next/navigation'
import { useCart } from '@/hooks/use-cart'

export default function Summery() {
  const searchParams = useSearchParams()
  const { items, removeAll } = useCart()

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed')
      removeAll()
    }

    if (searchParams.get('canceled')) {
      toast.error('Error. Something went wrong.')
    }
  }, [searchParams, removeAll])

  const onCheckOut = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    )

    window.location = res.data.url
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 sm:py-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2>Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
        <Button onClick={onCheckOut} size="lg" className="w-full rounded-full">
          Checkout
        </Button>
      </div>
    </div>
  )
}
