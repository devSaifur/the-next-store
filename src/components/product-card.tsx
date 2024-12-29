'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Expand, ShoppingCart } from 'lucide-react'
import { TProduct } from '../types'

import IconButton from '@/components/ui/icon-button'
import Currency from '@/components/currency'
import { usePreviewModal } from '@/hooks/use-preview-modal'
import { useCart } from '@/hooks/use-cart'

interface ProductCardProps {
  data: TProduct
}

export default function ProductCard({ data }: ProductCardProps) {
  const router = useRouter()

  const { onOpen } = usePreviewModal()
  const { addItem } = useCart()

  const handleClick = () => {
    router.push(`/product/${data.id}`)
  }

  function onPreview(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation()

    onOpen(data)
  }

  function onAddToCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation()

    addItem(data)
  }

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data.images?.[0]?.url}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority={false}
          alt={data.name}
          className="aspect-square rounded-md object-contain"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={Number(data.price)} />
      </div>
    </div>
  )
}
