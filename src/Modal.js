import React from 'react';
import './Modal.css';

function Modal( props ) {

    const cadastro = ( e ) => {
        e.preventDefault();

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

                    <input type="text" placeholder="Digite o título..." />
                    <input type="text" placeholder="Digite a sinopse..." />

                    <button onClick={ e => cancelar( e ) } className='btnCancelar' > Cancelar </button>
                    <button type="submit" className='btnSalvar' > Salvar </button>

                </form>

            </div>

        </div>

    );

}

export default Modal;

