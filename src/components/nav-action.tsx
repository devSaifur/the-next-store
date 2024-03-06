'use client'

import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function NavActions() {
  const [isMounted, setIsMounted] = useState(false) // to avoid hydration error when saving cart information on local storage

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="mx-auto flex items-center gap-x-4">
      <Button className="rounded-full">
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  )
}
