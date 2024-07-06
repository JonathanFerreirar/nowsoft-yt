import CallToAction from '@/components/callToAction/callToAction'
import Wrapper from '@/components/wrapper/wrapper'

import AsideForm from './fragments/asideForm'

const Budget = () => {
  return (
    <section
      id="start"
      className="mt-[-75px] w-full pb-12 pt-16 lg:bg-[#E8F0F1] lg:pb-24 lg:pt-40"
    >
      <Wrapper className="px-[50px] lg:grid lg:grid-cols-[1fr_510px]  lg:justify-between">
        <div className="py-14 sm:text-center lg:py-0  lg:text-start">
          <h1 className="mb-3.5 text-2xl font-semibold !leading-tight tracking-[0.01em] text-[#4C5354] sm:text-balance sm:text-4xl lg:mb-9 lg:text-5xl">
            Transforme ideias em sites{' '}
            <br className="hidden sm:block lg:hidden" /> incríveis: criação de
            sites <br className="hidden sm:block lg:hidden" />
            personalizados.
          </h1>
          <p className="mb-7 font-light text-[#777F81] sm:mb-11 sm:text-2xl lg:text-start lg:text-2xl lg:tracking-[0.02em]">
            Desenvolva sua ideia com a{' '}
            <strong className="font-light">Nowsoft</strong> e{' '}
            <br className="hidden sm:block" /> alcance mais clientes.
          </p>
          <CallToAction>Falar com o consultor</CallToAction>
        </div>

        <AsideForm />
      </Wrapper>
    </section>
  )
}

export default Budget
