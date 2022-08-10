import React from 'react';
import './Modal.css';

import axios from 'axios';

function ModalUsuario( props ) {

    const cadastro = ( e ) => {
        e.preventDefault();

        const usuario = e.target.usuario.value;
        const nome = e.target.nome.value;
        const senha = e.target.senha.value;

        // Limpa os campos
        e.target.usuario.value = "";
        e.target.nome.value = "";
        e.target.senha.value = "";

        const obj = {
            usuario: usuario,
            nome: nome,
            senha: senha
        }

        props.insere( "usuarios", obj ); 
        cancelar( e );

    }

    const autentica = ( e ) => {
        e.preventDefault();

        const usuario = e.target.usuario.value;
        const senha = e.target.senha.value;

        // Limpa os campos
        e.target.usuario.value = "";
        e.target.senha.value = "";

        const obj = {
            usuario: usuario,
            senha: senha
        }

        props.autentica( "usuarios", obj ); 
        cancelar( e );
    }

    const cancelar = ( e ) => {
        e.preventDefault();
        props.alteraModalUsuario( false );
    }

    return (

        <div className={ `painelModal ${props.modalUsuario == false ? "invisivel" : ""} ` } >

            <div className="fundoModal" ></div>
            <div className="modal animate__animated animate__fadeInDownBig" >

                <h2> Cadastre-se </h2>

                <form onSubmit={ e => cadastro( e ) } >

                    <input name="usuario" type="text" placeholder="Digite o usuario..." />
                    <input name="nome" type="text" placeholder="Digite o nome..." />
                    <input name="senha" type="text" placeholder="Digite a senha..." />

                    <button onClick={ e => cancelar( e ) } className='btnCancelar' > <i class="fa-solid fa-xmark"></i> Cancelar </button>
                    <button type="submit" className='btnSalvar' > Salvar <i class="fa-solid fa-check"></i> </button>

                </form>

                <hr/>

                <h2> Faça login </h2>

                <form onSubmit={ e => autentica( e ) } >

                    <input name="usuario" type="text" placeholder="Digite o usuario..." />
                    <input name="senha" type="text" placeholder="Digite a senha..." />

                    <button onClick={ e => cancelar( e ) } className='btnCancelar' > <i class="fa-solid fa-xmark"></i> Cancelar </button>
                    <button type="submit" className='btnSalvar' > Salvar <i class="fa-solid fa-check"></i> </button>

                </form>

            </div>

        </div>

    );

}

export default ModalUsuario;

