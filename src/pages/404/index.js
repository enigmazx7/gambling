import React from 'react';
import PageDefault from '../../components/pageDefault';
import Iframe from 'react-iframe';

function JOgoStart() {
  return (
    <PageDefault>
        <h1 style={{textAlign: "center"}}>Página não encontrada</h1>
          <div style={{textAlign: "center"}}>
            <Iframe url="https://oneclickdigital.com.br/flappy-bird"
              width="350px"
              height="510px"
              scrolling="no"
              frameBorder="0"
              id=""
              className=""
              display="initial"
              position="relative"/>
          </div>
    </PageDefault>
  )
}

export default JOgoStart; 