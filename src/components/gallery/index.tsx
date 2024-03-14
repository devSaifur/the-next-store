'use client'

import Image from 'next/image'
import { Tab } from '@headlessui/react'

import GalleryTab from '@/components/gallery/gallery-tab'
import { TImage } from '../../../types'

interface GalleryProps {
  images: TImage[]
}

export default function Gallery({ images = [] }: GalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
              <Image
                src={image.url}
                priority={true}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Image"
                className="object-contain object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
