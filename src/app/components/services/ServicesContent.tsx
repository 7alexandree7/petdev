"use client"
import React from 'react'
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Clock, } from "lucide-react"
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Scissors, Syringe, CarTaxiFront, Hotel, } from "lucide-react"

const services = [
  {
    title: "Banho & Tosa",
    description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
  },
  {
    title: "Consulta Veterinária",
    description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
  },
  {
    title: "Táxi Pet",
    description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
  },
  {
    title: "Hotel para pets",
    description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
  },
]


const ServicesContent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: { "(min-width: 768px)": { slidesToScroll: 3 } }
  })

  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext()
  }

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev()
  }

  return (
    <section className='bg-white py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl mb-12'>Serviços</h2>

        <div className='relative'>
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {services.map((service, index) => (
                <div className='flex-[0_0_100%] min-w-0 md:flex-[0_0_33.333%] px-3' key={index}>
                  <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                    <div className='flex-1 flex items-start justify-between'>
                      <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                          <span className='text-2xl'>{service.icon}</span>
                          <h3 className='font-bold text-xl my-1'>{service.title}</h3>
                        </div>
                        <div>
                          <p className='text-gray-400 text-sm select-none'>{service.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between border-t border-gray-500 pt-4 '>
                      <div className='flex items-center gap-2 text-sm '>
                        <Clock className='w-4 h-4' />
                        <span>{service.duration}</span>
                      </div>
                      <a className=' transition-all ease-in-out duration-500 flex items-center gap-2 hover:bg-red-500 py-2 px-4 rounded-md' href="#">
                        <WhatsappLogo />
                        Entrar em contato</a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button 
          className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 cursor-pointer absolute top-1/2 left-3 -translate-y-1/2 -translate-x-1/2 z-10'
           onClick={scrollPrev}>
            <ChevronLeft className='w-6 h-6 text-gray-600' />
          </button>
          <button 
          className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 cursor-pointer absolute top-1/2 -right-10 -translate-y-1/2 -translate-x-1/2 z-10'
           onClick={scrollNext}>
            <ChevronRight className='w-6 h-6 text-gray-600' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesContent
