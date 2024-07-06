import React from 'react'
import Image from 'next/image'

import Logo from '@/../public/logo.png'
import Wrapper from '@/components/wrapper/wrapper'
import { Button } from '@/primitive/ui/button'

import FloatingMenuMobile from './floatingMenu/floatingMenu'

const MobileHeader = () => {
  return (
    <React.Fragment>
      <header className="pt-2 sm:hidden">
        <Wrapper className="flex items-center justify-between">
          <Image
            src={Logo}
            width={191}
            height={50}
            alt="Logo nowSoft"
            className="h-[28px] w-[128px]"
          />
          <nav className="flex items-center gap-6">
            <Button
              variant="ghost"
              className="flex items-center px-1 text-sm font-medium capitalize text-links"
            >
              Inicio
            </Button>
            <Button
              variant="ghost"
              className="flex items-center px-1 text-sm font-medium capitalize text-links"
            >
              Preços
            </Button>
          </nav>
        </Wrapper>
      </header>
      <FloatingMenuMobile />
    </React.Fragment>
  )
}

export default MobileHeader
