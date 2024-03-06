import * as React from 'react'

export default function Container({ children }: React.ComponentProps<'div'>) {
  return <div className="mx-auto max-w-7xl">{children}</div>
}
