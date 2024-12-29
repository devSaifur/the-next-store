import Container from '@/components/ui/container'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default function HomePage() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Suspense
          fallback={
            <Skeleton className="h-[475px] w-full rounded-xl p-4 sm:p-6 lg:p-8" />
          }
        >
          <Billboard />
        </Suspense>
        <div className="grid gap-4">
          <Suspense
            fallback={
              <div className="flex gap-x-4">
                <Skeleton className="h-[350px] w-full rounded-md" />
                <Skeleton className="h-[350px] w-full rounded-md" />
                <Skeleton className="h-[350px] w-full rounded-md" />
                <Skeleton className="h-[350px] w-full rounded-md" />
              </div>
            }
          >
            <ProductList title="Featured Products" isFeatured={true} />
          </Suspense>
        </div>
      </div>
    </Container>
  )
}
