import React from 'react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='bg-[#E84C3D] text-white overflow-hidden  leading-10 relative'>
      <div>
        <Image
          src="/hero-dog.webp"
          className='object-cover opacity-60 md:hidden'
          alt="dog"
          fill
          quality={100}
          sizes="100vw"
          priority
        />
        <div className='absolute inset-0 bg-black opacity-30 md:hidden'></div>
      </div>
      <div className='container mx-auto pt-12 pb-12 md:pb-0 px-4'>
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <h1 data-aos="fade-down" className='text-3xl font-bold md:text-4xl '>Seu pet merece cuidado, carinho e atenção especial</h1>
            <p data-aos="fade-right" className='lg:text-lg'>Oferecemos os melhores serviços para garantir o bem estar e
              a felicidade do seu amigo de quatro patas.
            </p>
            <a data-aos-delay="400" data-aos="fade-up" className='bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2 w-fit' href="#">
              <WhatsappLogo className='w-5 h-5' />
              Contato via WhatsApp</a>
            <div className='mt-8'>
              <p data-aos="fade-left" data-aos-delay="300" className='text-sm mb-4'><span className='bg-black text-white rounded-md px-1   py-1 mr-1'>5%</span>de desconto na primeira compra</p>
              <div className='flex mt-4'>
                <div className='w-32 hidden md:block'>
                  <Image
                    src="/cat-hero.png"
                    alt="foto de um gato"
                    className='object-fill'
                    quality={100}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block h-full relative'>
            <Image
              src="/hero-dog.webp"
              className='object-contain'
              alt="dog"
              fill
              quality={100}
              sizes="(max-width: 768px) 0vw, 50vw"
              priority
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero
