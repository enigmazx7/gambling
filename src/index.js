import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategorias from './pages/cadastro/categorias'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>     
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />      
      <Route path="/cadastro/categorias" component={CadastroCategorias} />      
      <Route component={Pagina404} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

