import React from 'react'

import DesktopHeader from '@/components/header/desktop/desktop'
import MobileHeader from '@/components/header/mobile/mobile'

type Home = {
  children: React.ReactNode
}

const Home = () => {
  return (
    <div className="mb-52 h-screen">
      <DesktopHeader />

      <MobileHeader />
    </div>
  )
}
export default Home
