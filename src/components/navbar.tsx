import Container from '@/components/ui/container'
import MainNav from '@/components/main-nav'
import NavActions from '@/components/nav-action'

import Link from 'next/link'
import { getCategories } from '@/data/category'
import { Suspense } from 'react'
import { Skeleton } from './ui/skeleton'

export default function Navbar() {
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="text-xl font-bold">THE NEXT STORE</p>
          </Link>
          <Suspense fallback={<Skeleton className="ml-4 h-8 w-[100px]" />}>
            <NavDynamic />
          </Suspense>
          <NavActions />
        </div>
      </Container>
    </div>
  )
}

async function NavDynamic() {
  const categories = await getCategories()

  if (!categories) return null

  return <MainNav data={categories} />
}
