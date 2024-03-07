import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { cn } from '@/lib/utils'
import { TImage } from '../../../types'

interface GalleryTabProps {
  image: TImage
}

export default function GalleryTab({ image }: GalleryTabProps) {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <Image
              src={image.url}
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="product"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          />
        </div>
      )}
    </Tab>
  )
}
