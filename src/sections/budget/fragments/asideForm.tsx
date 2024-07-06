import React from 'react'
import { Clock3Icon } from 'lucide-react'

import BudgetForm from './budgetForm'

const AsideForm = () => {
  return (
    <aside className="rounded-md bg-[#f7f9fa] p-6 sm:mx-auto sm:max-w-lg">
      <div className="mx-auto mb-6 flex max-w-80 items-center justify-center gap-2 rounded-md bg-white p-3 max-sm:px-0 sm:max-w-none sm:justify-start sm:px-7">
        <Clock3Icon aria-hidden className="size-7 fill-primary text-white" />
        <p className="text-xs uppercase tracking-[0.14rem] max-sm:text-[0.685rem]">
          RESPONDEMOS EM 20 MINUTO <br className="sm:hidden" /> OU GANHE
          <br className="hidden sm:block" /> 10% DE DESCONTO!
        </p>
      </div>
      <BudgetForm />
    </aside>
  )
}

export default AsideForm
