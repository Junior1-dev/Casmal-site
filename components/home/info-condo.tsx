"use client"
import { Button, Image } from '@nextui-org/react';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { BsFillBuildingsFill } from "react-icons/bs";

const InfoCondo = () => {
    return (
        <section className='grid grid-cols-2 gap-4 max-[992px]:grid-cols-1'>
            <div>
                <div className='pt-4 space-y-4 max-[992px]:pt-0'>
                    <h2 className='font-bold text-3xl'>
                        Pensamos no seu sucesso digital
                    </h2>
                    <p className='text-xl'>
                        Oferecemos soluções digitais eficientes e personalizadas, pensando não apenas nas necessidades imediatas, mas também no crescimento e sustentabilidade de seus negócios. Sabemos que os desafios podem ser inesperados, mas com nossa experiência e inovação, garantimos que seus investimentos em tecnologia sejam bem-sucedidos, seguros e rentáveis. Escolher a Casmal Digital é garantir um futuro promissor para sua empresa, com a flexibilidade e segurança necessárias para prosperar no mercado.
                         Nosso time está sempre pronto para ouvir, entender e colaborar com você em todas as fases do processo. O nosso trabalho vai além da entrega de um serviço ou produto: buscamos criar uma parceria duradoura, onde o seu sucesso é o nosso maior objetivo. 

                    </p>

                    <Button variant='bordered' className='border-app text-app font-bold rounded-sm'
                        startContent={<GoArrowUpRight />}>
                        Ver Nossas Soluções
                    </Button>
                </div>
            </div>
            <div className='max-[992px]:-order-1 relative'>
                <Image
                    src='/images/banners/banner-3.jpg'
                    className='rounded-md'
                />
                <div className="absolute bottom-0 right-0 z-[200] shadow-sm bg-app p-4 rounded-tl-sm rounded-br-sm opacity-95 text-white">
                    <h2 className='flex items-center gap-2'>
                        <span className='text-2xl'>
                            <BsFillBuildingsFill />
                        </span>
                        <span className='text-base font-bold'>Transforme o futuro da sua empresa</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default InfoCondo;
