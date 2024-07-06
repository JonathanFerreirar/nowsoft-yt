import React from 'react'

import { Button } from '@/primitive/ui/button'

type CallToActionProps = React.PropsWithChildren &
  React.ComponentProps<typeof Button>

const CallToAction = ({ children, ...props }: CallToActionProps) => {
  return <Button {...props}>{children}</Button>
}

export default CallToAction
