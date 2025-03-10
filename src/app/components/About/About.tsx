import { Check, MapPin } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='bg-[#fdf6ec] py-16'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                <div className='relative'>

                    <div data-aos="fade-right" data-aos-delay="400" className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                        <Image
                            className=' hover:scale-110 transition-all ease-in-out duration-500 object-cover'
                            src="/about-1.png" alt="foto do cachorro" fill quality={100} priority />
                    </div>

                    <div data-aos="fade-left" data-aos-delay="400" className='absolute w-40 h-40 rounded-3xl overflow-hidden right-0 -bottom-8 border-white border-4'>
                        <Image
                            className=""
                            src=
                            "/about-2.png" alt="foto do cachorro" fill quality={100} priority />
                    </div>

                </div>

                <div className='space-y-6 '>
                    <h2 data-aos="fade-up" data-aos-delay="200" className='text-4xl font-bold'>Sobre</h2>
                    <p data-aos="fade-left" data-aos-delay="100">Until one has loved an animal, a part of one's soul remains unawakened.
                        We believe in it and we believe in easy access to things that are good for our mind, body and spirit. With a clever offering,
                        superb support and a secure checkout you're in good hands.</p>
                    <ul data-aos="fade-right" data-aos-delay="100" className='space-y-4'>
                        <li className='flex items-center gap-2'>
                            <Check className='text-red-500' />
                            Aberto desde 2016
                        </li>
                        <li className='flex items-center gap-2'>
                            <Check className='text-red-500' />
                            Equipe com mais de 10 veterinários
                        </li>
                        <li className='flex items-center gap-2'>
                            <Check className='text-red-500' />
                            Qualidade é nossa prioridade
                        </li>
                    </ul>
                    <div className='flex items-center gap-4'>
                        <a data-aos="fade-up" data-aos-delay="500" className='flex items-center gap-2 bg-[#E84C3D] w-fit px-4 py-2 rounded-md text-white' href="#">
                            <WhatsappLogo className='w-5 h-5 text-white' />
                            Contato via WhatsApp
                        </a>
                        <a  data-aos="fade-up" data-aos-delay="500" className='flex items-center gap-2  w-fit px-4 py-2 rounded-md text-black ' href="#">
                            <MapPin className='w-5 h-5 text-black order-2' />
                            Endereço da loja
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
