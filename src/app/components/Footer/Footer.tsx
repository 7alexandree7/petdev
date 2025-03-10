import React from 'react'
import golden from '../../../../public/golden.png'
import royal from '../../../../public/royal.png'
import primier from '../../../../public/primier.png'
import whiskas from '../../../../public/whiskas.png'
import natural from '../../../../public/natural.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

const Footer = () => {
    return (
        <section className='bg-[#E84C3D] py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-6 text-center'>Marcas que trabahamos</h4>
                    <div className='grid grid-cols-2 overflow-hidden lg:grid-cols-6 gap-6'>
                        {brands.map((brand, index) => (
                            <div className='bg-white p-4 flex items-center justify-center rounded-lg' key={index} >
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={100}
                                    height={100}
                                    quality={100}
                                    style={{width: 'auto', height: 'auto'}}
                                    className='object-contain'
                                />

                            </div>
                        ))}
                    </div>
                </div>
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold'>Pet Shop Dev</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
                        <a className='bg-green-500 mt-4 py-2 px-4 rounded-md ' href="#">Contato via WhatsApp</a>
                    </div>

                    <div>
                    <h3 className='text-2xl font-semibold'>Contatos</h3>
                    <p className='text-sm text-white/80'>Email: Teste@example.com</p> 
                    <p className='text-sm text-white/80'>Telefone: (11) 99999-9999</p> 
                    <p className='text-sm text-white/80'>Rua: Recreio Ipiranga</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href="#"><FacebookLogo className='w-8 h-8' /></a>
                            <a href="#"><InstagramLogo className='w-8 h-8' /></a>
                            <a href="#"><YoutubeLogo className='w-8 h-8' /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Footer
    