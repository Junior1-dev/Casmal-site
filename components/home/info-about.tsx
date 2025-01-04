"use client"
import { Button, Image } from '@nextui-org/react';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { MdSecurity } from "react-icons/md";

const InfoAbout = () => {
    return (
        <section className='grid grid-cols-2 gap-4 max-[992px]:grid-cols-1 '>
            <div className="relative">
                <Image
                    src='/images/banners/banner-1.jpg'
                    className='rounded-sm'
                    removeWrapper={false}
                />
                <div className="absolute bottom-0 right-0 z-[200] shadow-sm bg-app p-4 rounded-tl-sm rounded-br-sm opacity-95 text-white ">
                    <h2 className='flex items-center gap-2'>
                        <span className='text-2xl'>
                            <MdSecurity />
                        </span>
                        <span className='text-base font-bold'>
                            Seguro e confiável
                        </span>
                    </h2>
                </div>
            </div>

            <div>
                <div className='pt-4 space-y-3 max-[992px]:pt-0 '>
                    <h2 className='font-bold text-3xl'>
                        Procedimentos Seguros e Inovadores
                    </h2>
                    <p className='text-xl text-justify'>
    Na Casmal Digital, não acreditamos em soluções genéricas, e sim em resultados personalizados e inovadores que atendem às necessidades únicas de cada cliente. Nossa missão é transformar ideias em experiências digitais de impacto, desenvolvendo projetos que não só atendem, mas superam as expectativas dos nossos parceiros. Cada projeto é tratado com atenção meticulosa aos detalhes e uma abordagem personalizada, desde a criação de websites que refletem a identidade única de sua marca, até a construção de aplicativos móveis funcionais, rápidos e seguros. Nosso compromisso vai além de simplesmente entregar um produto final; estamos aqui para criar um futuro digital que seja a verdadeira extensão de seus objetivos e aspirações.


    </p>


                    <Button variant='bordered' className='border-app text-app font-bold rounded-sm'
                        startContent={<GoArrowUpRight />} >
                        Conheça nossos serviços
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default InfoAbout;
