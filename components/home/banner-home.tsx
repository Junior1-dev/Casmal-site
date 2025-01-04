"use client"
import React from 'react';
import banner from './index.module.css';
import { ButtonApp } from '../ui/button-app';
import { Button, Image } from '@nextui-org/react';
import { useModal } from '@/hooks';

const BannerHome = () => {
  const { setIsOpen } = useModal();

  return (
    <section className={` ${banner.banner} min-h-[100vh] flex items-center justify-start max-[1200px]:px-12`}>
      <div className="max-w-6xl w-full mx-auto">
        <div className="max-w-[600px] w-full space-y-4 ">
          <h1 className='font-bold text-5xl leading-[55px]'>
            Transforme sua empresa com as soluções digitais e gráficas da <span className="text-app">CASMAL DIGITAL</span>
          </h1>
          <div className="flex gap-4 flex-wrap">
            <ButtonApp>
              Conheça nossos serviços
            </ButtonApp>

            <Button onClick={() => setIsOpen(true)} className='border-app text-app font-bold' size='lg' variant="bordered">
              Realizar agendamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerHome;
