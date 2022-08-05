import React from 'react';
import './Modal.css';

import axios from 'axios';

function Modal( props ) {

    const cadastro = ( e ) => {
        e.preventDefault();

        const titulo = e.target.titulo.value;
        const sinopse = e.target.sinopse.value;

        const obj = {
            titulo: titulo,
            sinopse: sinopse
        }

        props.insere( obj ); 
        cancelar( e );

    }

    const cancelar = ( e ) => {
        e.preventDefault();
        props.alteraModal( false );
    }

    return (

        <div id="modal" className={ props.modal == false ? "invisivel" : "" } >

            <div className="fundoModal" ></div>
            <div className="modal" >

                <h2> Cadastre um filme </h2>

                <form onSubmit={ e => cadastro( e ) } >

                    <input name="titulo" type="text" placeholder="Digite o título..." />
                    <input name="sinopse" type="text" placeholder="Digite a sinopse..." />

                    <button onClick={ e => cancelar( e ) } className='btnCancelar' > <i class="fa-solid fa-xmark"></i> Cancelar </button>
                    <button type="submit" className='btnSalvar' > Salvar <i class="fa-solid fa-check"></i> </button>

                </form>

            </div>

        </div>

    );

}

export default Modal;

