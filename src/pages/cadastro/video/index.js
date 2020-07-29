import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
      <PageDefault>
       <h1> cadastro de video </h1> 

      <Link to="/cadastro/categorias">
        Cadastro de Categorias 1
      </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;