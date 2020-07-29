import React from 'react';
import PageDefault from '../../../components/pageDefault';
import { Link } from 'react-router-dom';

function CadastroCategorias() {
    return (
      <PageDefault>
       <h1> cadastro de Categorias </h1> 

      <Link to="/">
        Voltar para Home
      </Link>
      </PageDefault>
    )
  }

  export default CadastroCategorias;