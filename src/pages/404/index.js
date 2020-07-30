import React from 'react';
import PageDefault from '../../components/pageDefault';
import Iframe from 'react-iframe';
import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
`;

const Div = styled.div`
  text-align: center;
`;

function JOgoStart() {
  return (
    <PageDefault>
        <H1>ERRO 404: Página não encontrada</H1>
          <Div style={{textAlign: "center"}}>
            <Iframe url="https://oneclickdigital.com.br/flappy-bird"
              width="350px"
              height="510px"
              scrolling="no"
              frameBorder="0"
              id=""
              className=""
              display="initial"
              position="relative"/>
          </Div>
    </PageDefault>
  )
}

export default JOgoStart; 