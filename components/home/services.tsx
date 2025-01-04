import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';

const services = [
    {
        name: "Desenvolvimento de Websites",
        description: "Criamos websites personalizados e responsivos, alinhados com as necessidades do seu negócio, garantindo uma presença digital eficaz e de alto impacto.",
        icon: <FaLaptopCode />
    },
    {
        name: "Desenvolvimento de Aplicativos",
        description: "Oferecemos soluções em aplicativos móveis, criados para melhorar a experiência do usuário e garantir desempenho, segurança e funcionalidade para o seu negócio.",
        icon: <FaMobileAlt />
    },
    {
        name: "Produção Gráfica",
        description: "Com soluções gráficas de alta qualidade, fornecemos materiais promocionais, brindes e design personalizado para fortalecer a identidade visual da sua marca.",
        icon: <FaPaintBrush />
    }
];

const Services = () => {
    return (
        <section className=''>
            <ul className='grid grid-cols-3 gap-3 max-[992px]:grid-cols-2 max-[702px]:grid-cols-1'>
                {services.map((service, index) => (
                    <li key={index} className='p-4 space-y-4 shadow-md border'>
                        <div className='flex gap-2 items-end text-app'>
                          <span className='text-4xl'>{service.icon}</span>  
                        <h3 className='text-xl font-bold'> {service.name} </h3>
                        </div>
                        <p> {service.description} </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Services;
