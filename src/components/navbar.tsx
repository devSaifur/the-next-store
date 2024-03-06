import Container from '@/components/ui/container'
import MainNav from '@/components/main-nav'
import NavActions from '@/components/nav-action'

import Link from 'next/link'
import { categoryAction } from '@/actions/category-get'

export default async function Navbar() {
  const categories = await categoryAction()

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="text-xl font-bold">THE NEXT STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavActions />
        </div>
      </Container>
    </div>
  )
}
