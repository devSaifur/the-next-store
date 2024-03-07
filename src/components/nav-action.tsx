'use client'

import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NavActions() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false) // to avoid hydration error when saving cart information on local storage
  const { items } = useCart()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/cart')} className="rounded-full">
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length}
        </span>
      </Button>
    </div>
  )
}
