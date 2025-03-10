"use client"

import React from 'react'
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Clock, } from "lucide-react"
import tutor1 from "../../../../public/tutor1.png"
import tutor2 from "../../../../public/tutor2.jpg"
import tutor3 from "../../../../public/tutor3.jpg"
import Image from 'next/image'


const testimonials = [
    {
        content:
            "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
        author: "Mariana Souza",
        role: "Tutora da Luna (Golden Retriever)",
        image: tutor1,
    },
    {
        content:
            "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
        author: "Rafael",
        role: "Tutor do Thor (Bulldog Francês)",
        image: tutor2,
    },
    {
        content: "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
        author: "Camila fernandes",
        role: "Tutora da Mel e do Max",
        image: tutor3,
    },
]


const Testimonials = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        slidesToScroll: 1,
    })

    function scrollNext() {
        if (emblaApi) emblaApi.scrollNext()
    }

    function scrollPrev() {
        if (emblaApi) emblaApi.scrollPrev()
    }

    return (
        <section className='bg-[#FFD449] py-16'>
            <div className='container mx-auto px-4'>
                <h2 className='text-4xl mb-12 text-center'>Depoimentos</h2>

                <div className='relative max-w-4xl mx-auto'>
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {testimonials.map((item, index) => (
                                <div className='flex-[0_0_100%] min-w-0  px-3' key={index}>
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24 rounded-full overflow-hidden'>
                                                <Image
                                                src={item.image}
                                                alt={item.author}
                                                fill
                                                priority
                                                quality={100}
                                                sizes='100px'
                                                className='object-cover rounded-full'
                                                 />
                                            </div>
                                            <p className='text-gray-200'>{item.content}</p>
                                            <div>
                                            <p className='font-bold'>{item.author}</p>
                                            <p className='text-sm text-gray-400'>{item.role}</p>
                                            </div>
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

export default Testimonials
