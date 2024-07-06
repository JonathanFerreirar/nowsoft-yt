import React from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

import Logo from '@/../public/logo.png'
import Wrapper from '@/components/wrapper/wrapper'

import FloatingMenu from './floatingMenu/floatingMenu'

const DesktopHeader = () => {
  return (
    <React.Fragment>
      <Wrapper className="hidden sm:block">
        <header className="flex w-full items-center justify-between pt-[30px]">
          <Image
            src={Logo}
            width={323}
            height={59}
            alt="Logo nowSoft"
            className="h-[59px] w-[273px]"
          />
          <span
            aria-label="cidade"
            className="mr-3 flex items-center text-[17px] text-links"
          >
            <MapPin aria-hidden className="size-6 fill-primary text-white" />
            Belo Horizonte - MG
          </span>
        </header>
      </Wrapper>
      <FloatingMenu />
    </React.Fragment>
  )
}

export default DesktopHeader
