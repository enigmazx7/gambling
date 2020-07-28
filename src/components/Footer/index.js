import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://gambling.vercel.app/static/media/Logo.4e8ce659.png" alt="Logo Alura" />
      </a>
      <p>
        Sua central de streaming sobre jogos
        {' '}
      </p>
    </FooterBase>
  );
}

export default Footer;
