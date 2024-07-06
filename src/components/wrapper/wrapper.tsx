import React from 'react'

import { cn } from '@/lib/utils'

type WrapperProps = React.PropsWithChildren & React.ComponentProps<'div'>

const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <div
      {...props}
      className={cn(
        'max-w-[1300px] mx-auto w-full max-sm:px-3',
        props.className,
      )}
    >
      {children}
    </div>
  )
}

export default Wrapper
