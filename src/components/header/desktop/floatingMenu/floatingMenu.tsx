import React from 'react'

import CallToAction from '@/components/callToAction/callToAction'
import Wrapper from '@/components/wrapper/wrapper'
import { NAV_ITEMS } from '@/navigation/navItem'

const FloatingMenu = () => {
  return (
    <Wrapper
      aria-label="navegação principal"
      className="sticky top-0 z-40 hidden py-2 sm:block"
    >
      <div className="my-[30px] flex items-center justify-between rounded-md bg-white/85 px-[50px] py-4 shadow-md">
        <nav className="flex items-center justify-start gap-10">
          {NAV_ITEMS.map((item) => {
            return (
              <button
                key={item.label}
                className="flex items-center px-1 text-base font-medium capitalize text-links hover:text-primary"
              >
                {item.label}
              </button>
            )
          })}
        </nav>
        <CallToAction
          variant="outline"
          className="rounded-full border-2 border-primary bg-transparent py-2 font-semibold text-primary hover:bg-transparent hover:text-primary sm:h-11 lg:py-0 "
        >
          Falar com o consultor
        </CallToAction>
      </div>
    </Wrapper>
  )
}

export default FloatingMenu
