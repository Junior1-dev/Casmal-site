"use client";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="w-full px-14 py-10 max-[992px]:px-3 space-y-10">
      <h1 className="text-3xl font-bold text-center">Políticas e Privacidades</h1>
      <div className="space-y-6">
        {/* Introdução */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introdução</h2>
          <p>
            Bem-vindo à nossa página de Políticas e Privacidades. Esta política explica como coletamos, usamos,
            divulgamos e protegemos suas informações quando você utiliza nossos serviços e visita nosso site.
          </p>
        </section>

        

        {/* Uso das Informações */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Como Utilizamos Suas Informações</h2>
          <p>As informações coletadas são usadas para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fornecer, operar e manter nossos serviços.</li>
            <li>Personalizar sua experiência e atender às suas necessidades específicas.</li>
            <li>Enviar atualizações, promoções e informações relevantes.</li>
            <li>Cumprir obrigações legais e proteger nossos direitos.</li>
          </ul>
        </section>

        {/* Compartilhamento de Dados */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos suas informações pessoais com terceiros, exceto:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Quando exigido por lei ou regulamento.</li>
            <li>Para proteger nossos direitos ou evitar fraudes.</li>
            <li>Com parceiros de confiança para operar nossos serviços.</li>
          </ul>
        </section>

        {/* Segurança */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Segurança das Informações</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger suas informações contra acesso não
            autorizado, uso indevido ou divulgação. No entanto, nenhum sistema é completamente seguro,
            e não podemos garantir segurança absoluta.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contato</h2>
          <p>
            Se tiver dúvidas ou preocupações sobre esta política, entre em contato conosco:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>E-mail: <a href="mailto:casmaldigital@gmail.com" className="text-blue-500 underline">casmaldigital@gmail.com</a></li>
            <li>Telefone: Comercial: 921 525 466 | Apoio ao Cliente: 921 525 611</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
