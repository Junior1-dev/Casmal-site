import React from 'react';
import { footerContacts } from './data-footer';
import { Button } from '@nextui-org/button';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importando os ícones corretos

// Mapeamento de ícones
const iconMap = {
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedin />
};

const ContactsFooter = () => {
    return (
        <div className="space-y-4">
            {/* Exibindo o título de contatos */}
            <h2>{footerContacts.contacts.label}</h2>

            {/* Lista de contatos */}
            <ul className='space-y-3'>
                {footerContacts.contacts.links.map((link, index) => (
                    <li key={index} className='flex items-center gap-2'>
                        {/* Ícone do link, caso exista */}
                        <span className='text-xl'>
                            {link.icon && iconMap[link.icon]}
                        </span>
                        <span className='text-xs'>{link.label}</span>
                    </li>
                ))}
            </ul>

            {/* Lista de ícones sociais */}
            <ul className='flex gap-4 items-center'>
                {footerContacts.contacts.iconsSocial.map((link, index) => (
                    <li key={index}>
                        <Button
                            size='sm'
                            isIconOnly
                            className='border rounded-full bg-transparent text-white'
                            aria-label={link.label}>
                            {/* Mapeando os ícones sociais */}
                            {iconMap[link.icon]}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactsFooter;
