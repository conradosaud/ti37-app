import React from 'react';
import './App.css';

import Menu from './Menu';
import Container from './Container';
import Modal from './Modal';

import axios from 'axios';

function App() {

    const API_URL = "http://localhost:3001/";

    // Variável que guarda todos os filmes listados
    const [ filmes, alteraFilmes ] = React.useState( [] );

    // Variável que altera a exibição da modal de cadastro
    const [ modal, alteraModal ] = React.useState( false );

    // Funções comuns da API para busca e inserção:
    const buscaTodos = () => {
        axios.get( API_URL + 'filmes')
        .then( response => alteraFilmes( response.data ) )
    }

    const buscaTitulo = ( titulo ) => {
        axios.get( API_URL + `busca_filmes/${titulo}` )
        .then( response => alteraFilmes( response.data ) )
    }

    const insere = ( obj ) => {
        axios.post( API_URL + 'filmes', obj )
        .then( () => buscaTodos() )
    }

    return (

        <div id="app" >

            <Menu modal={ modal } alteraModal={ alteraModal } />
            <Container buscaTitulo={buscaTitulo} buscaTodos={buscaTodos} filmes={ filmes } alteraFilmes={ alteraFilmes } />
            <Modal insere={insere} modal={ modal } alteraModal={ alteraModal } />

        </div>

    );

}

export default App;

