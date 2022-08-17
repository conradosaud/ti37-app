import React from 'react';
import './App.css';

import Menu from './Menu';
import Container from './Container';
import Modal from './Modal';
import ModalUsuario from './ModalUsuario';

import axios from 'axios';

function App() {

    const API_URL = "http://localhost:3001/";

    // Variável que guarda todos os filmes listados
    const [ filmes, alteraFilmes ] = React.useState( [] );

    // Variável que guarda o usuário logado
    const [ usuario, alteraUsuario ] = React.useState( {} );

    // Variável que altera a exibição da modal de cadastro
    const [ modal, alteraModal ] = React.useState( false );
    const [ modalUsuario, alteraModalUsuario ] = React.useState( false );

    // Funções comuns da API para busca e inserção:
    const buscaTodos = () => {
        axios.get( API_URL + 'filmes')
        .then( response => alteraFilmes( response.data ) )
    }

    const buscaTitulo = ( titulo ) => {
        axios.get( API_URL + `filmes/busca_filmes/${titulo}` )
        .then( response => alteraFilmes( response.data ) )
    }

    const insere = ( tabela, obj ) => {
        axios.post( API_URL + tabela, obj )
        .then( () => buscaTodos() )
    }

    const autentica = ( tabela, obj ) => {
        axios.post( API_URL + tabela+"/autentica", obj )
        .then( resposta => {

            if( resposta.data == 0 ){
                alert("Usuário ou senha incorreto");
                return;
            }

            alert("Logado com sucesso!");
            alteraUsuario( resposta.data[0] )

        })
    }

    const remove = ( id ) => {
        axios.delete( API_URL + `filmes/${id}` )
        .then( () => buscaTodos() )
    }

    const deslogaUsuario = () => {
        alteraUsuario( {} );
    }

    return (

        <div id="app" >

            <Menu usuario={usuario} modal={ modal } alteraModal={ alteraModal } modalUsuario={modalUsuario} alteraModalUsuario={alteraModalUsuario} />
            <Container deslogaUsuario={deslogaUsuario} usuario={usuario} remove={remove} buscaTitulo={buscaTitulo} buscaTodos={buscaTodos} filmes={ filmes } alteraFilmes={ alteraFilmes } />
            <Modal insere={insere} modal={ modal } alteraModal={ alteraModal } />
            <ModalUsuario autentica={autentica} insere={insere} modalUsuario={modalUsuario} alteraModalUsuario={alteraModalUsuario} />

        </div>

    );

}

export default App;

