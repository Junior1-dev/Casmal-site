"use client"
import { Image } from '@nextui-org/react';
import React from 'react';
import { title } from '../primitives';
import { RiTeamFill } from "react-icons/ri";

const AboutInfo = () => {
    return (
        <section className='w-full px-14 max-[992px]:px-3'>
            <div className="grid grid-cols-2 gap-4 max-[992px]:grid-cols-1">
                <div className='relative'>
                    <Image
                        src='/images/banners/team.WEBP' // Imagem atualizada para Casmal Digital
                        className='rounded-md'
                    />
                    <div className="absolute bottom-0 z-[2000] shadow-sm bg-app p-4 rounded-tr-sm rounded-bl-sm opacity-95 text-white">
                        <h2 className='flex items-center gap-2'>
                            <span className='text-2xl'>
                                <RiTeamFill />
                            </span>
                            <span className='text-base font-bold'>Fundadores da Casmal Digital</span>
                        </h2>
                    </div>
                </div>

                <div className='space-y-5 pt-4'>
                    <h1 className={title()}>Quem Somos?</h1>
                    <p className='text-base'>
                        A Casmal Digital é uma empresa inovadora que oferece soluções completas nas áreas de Tecnologia e Inovação, e Gráfica e Produção. Com uma equipe especializada, nosso objetivo é transformar ideias em soluções impactantes para empresas de diversos segmentos.
                    </p>

                    <div className='space-y-2'>
                        <h2 className='font-bold text-2xl'>Nosso Compromisso!</h2>
                        <p>
                            Atuando com excelência e inovação, a Casmal Digital busca sempre superar as expectativas de seus clientes, oferecendo serviços personalizados em tecnologia, gráficos e soluções digitais que geram resultados positivos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutInfo;
