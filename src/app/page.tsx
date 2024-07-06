import React from 'react'

import DesktopHeader from '@/components/header/desktop/desktop'
import MobileHeader from '@/components/header/mobile/mobile'
import Budget from '@/sections/budget/budget'

type Home = {
  children: React.ReactNode
}

const Home = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center overflow-x-hidden">
      <DesktopHeader />
      <MobileHeader />
      <Budget />
    </main>
  )
}
export default Home
