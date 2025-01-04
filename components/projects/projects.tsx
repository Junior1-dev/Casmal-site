"use client";
import React, { useState } from "react";
import { Card, Button } from "@nextui-org/react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaBrush,
  FaVideo,
  FaChartBar,
} from "react-icons/fa";

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criação de websites personalizados, responsivos e otimizados.",
    icon: <FaLaptopCode className="text-4xl text-blue-500" />,
  },
  {
    title: "Desenvolvimento de Aplicativos",
    description: "Aplicativos móveis nativos e híbridos sob medida.",
    icon: <FaMobileAlt className="text-4xl text-green-500" />,
  },
  {
    title: "Hospedagem e Cloud",
    description: "Soluções de hospedagem seguras e escaláveis.",
    icon: <FaCloud className="text-4xl text-indigo-500" />,
  },
  {
    title: "Design Gráfico",
    description: "Design de marcas, materiais promocionais e muito mais.",
    icon: <FaBrush className="text-4xl text-pink-500" />,
  },
  {
    title: "Produção Audiovisual",
    description: "Filmagens, edição de vídeos e locação de equipamentos.",
    icon: <FaVideo className="text-4xl text-red-500" />,
  },
  {
    title: "Gestão de Mídias Sociais",
    description: "Consultoria e estratégias para redes sociais.",
    icon: <FaChartBar className="text-4xl text-yellow-500" />,
  },
];

const ServicesPage = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="w-full px-14 py-10 max-[992px]:px-3 space-y-10">
      <h1 className="text-3xl font-bold text-center">Nossos Serviços</h1>
      <p className="text-center text-gray-600">
        Conheça nossas soluções inovadoras e personalizadas para atender às suas necessidades.
      </p>
      <div className="grid grid-cols-3 gap-6 max-[992px]:grid-cols-2 max-[702px]:grid-cols-1">
        {visibleServices.map((service, index) => (
          <Card key={index} className="p-6 shadow-md hover:shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <div>{service.icon}</div>
              <h2 className="text-xl font-semibold text-center">{service.title}</h2>
              <p className="text-center text-gray-500">{service.description}</p>
              <Button
                className="mt-4 w-full"
                color="primary"
                radius="lg"
                size="sm"
                onClick={() => alert(`Saiba mais sobre: ${service.title}`)}
              >
                Saiba Mais
              </Button>
            </div>
          </Card>
        ))}
      </div>
      {!showAll && (
        <div className="text-center">
          <Button
            className="mt-6"
            color="secondary"
            radius="lg"
            size="md"
            onClick={() => setShowAll(true)}
          >
            Ver Mais
          </Button>
        </div>
      )}
    </section>
  );
};

export default ServicesPage;
