import React from 'react';
import { Link } from '@nextui-org/link';
import { footerMapLinks } from './data-footer';
import { MdKeyboardArrowRight } from "react-icons/md";

const MapLinksFooter = () => {
    return (
        <div className="space-y-2">
            {/* Título da seção de links */}
            <h2>{footerMapLinks.label}</h2>
            
            {/* Lista de links */}
            <ul className='flex flex-col gap-2'>
                {footerMapLinks.links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            size='sm'
                            className='text-white flex items-center gap-1'
                            aria-label={link.label}
                        >
                            {/* Ícone da seta à esquerda do texto */}
                            <span className='text-lg'>
                                <MdKeyboardArrowRight />
                            </span>
                            
                            {/* Nome do link */}
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MapLinksFooter;
