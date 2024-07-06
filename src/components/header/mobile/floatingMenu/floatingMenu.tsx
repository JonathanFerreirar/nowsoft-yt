import React from 'react'
import { MapPin } from 'lucide-react'

import CallToAction from '@/components/callToAction/callToAction'
import Wrapper from '@/components/wrapper/wrapper'

const FloatingMenuMobile = () => {
  return (
    <Wrapper
      aria-label="navegação principal"
      className="sticky top-0 z-40 py-2 sm:hidden"
    >
      <nav className="relative flex items-center justify-between rounded-md bg-white/85 px-2 py-3 shadow-md">
        <span
          aria-label="cidade"
          className="mr-3 flex items-center text-[10px] font-medium text-links"
        >
          <MapPin aria-hidden className="size-6 fill-primary text-white" />
          Belo Horizonte - MG
        </span>
        <div className="absolute right-1/2 h-px w-[30px] translate-x-1/2 rotate-90 bg-links" />
        <CallToAction
          variant="outline"
          className="max-h-[20px] max-w-[122.25px] rounded-full  border-2 border-primary bg-transparent py-4 text-[10px] font-semibold text-primary hover:bg-transparent hover:text-primary"
        >
          Fazer orçamento
        </CallToAction>
      </nav>
    </Wrapper>
  )
}

export default FloatingMenuMobile
