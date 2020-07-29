import React from 'react';
import PageDefault from '../../../components/pageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
      <PageDefault>
       <h1> cadastro de video </h1> 

      <Link to="./categorias">
        Cadastro de Categorias
      </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;