import * as React from 'react'

import { cn } from '@/lib/utils'

interface IconButtonProps extends React.ComponentProps<'button'> {
  icon: React.ReactElement
}

export default function IconButton({
  icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110',
        className
      )}
      {...props}
    >
      {icon}
    </button>
  )
}
