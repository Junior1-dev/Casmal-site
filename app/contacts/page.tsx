"use client";
import { Input, Textarea, Button } from "@nextui-org/react";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="w-full px-14 py-10 max-[992px]:px-3 space-y-10">
      <h1 className="text-3xl font-bold text-center">Entre em Contacto</h1>
      <div className="grid grid-cols-2 gap-8 max-[992px]:grid-cols-1">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Informações de Contacto</h2>
          <p>Entre em contacto connosco para saber mais sobre nossos serviços e soluções.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-app text-xl" />
              <p>Av. 21 de Janeiro, Bairro Gamek, Luanda - Angola</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-app text-xl" />
              <p>Comercial: 921 525 466 | Apoio ao Cliente: 921 525 611</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-app text-xl" />
              <p>casmaldigital@gmail.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Siga-nos nas Redes Sociais</h2>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-app text-2xl hover:text-blue-600" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-app text-2xl hover:text-blue-400" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-app text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Envie-nos uma Mensagem</h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mensagem enviada com sucesso!");
            }}
          >
            <Input
              type="text"
              label="Nome"
              placeholder="Seu nome completo"
              required
              aria-label="Nome"
            />
            <Input
              type="email"
              label="Email"
              placeholder="Seu endereço de email"
              required
              aria-label="Email"
            />
            <Textarea
              label="Mensagem"
              placeholder="Escreva sua mensagem aqui..."
              rows={6}
              required
              aria-label="Mensagem"
            />
            <Button type="submit" color="primary" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
