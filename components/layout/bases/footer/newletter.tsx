"use client"
import { Input } from '@nextui-org/input';
import React, { useState } from 'react';
import { BsSendFill } from "react-icons/bs";

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitting(true);
            // Simulação de envio ou integração com API
            console.log('Enviando email para: ', email);
            setIsSubmitting(false);
        } else {
            console.log('Por favor, insira um e-mail válido.');
        }
    };

    return (
        <div className="space-y-4">
            <h2>Inscreva-se na Newsletter</h2>
            <p>
                Deixe seu email para estar na nossa área de membros e receber
                atualizações sobre gestão empresarial diretamente no seu e-mail.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Coloque o seu email"
                    required
                    aria-label="Digite seu email"
                    endContent={
                        <button type="submit" disabled={isSubmitting} className="bg-app p-2 rounded-full">
                            <BsSendFill className="text-white" />
                        </button>
                    }
                />
            </form>
        </div>
    );
}

export default Newsletter;
