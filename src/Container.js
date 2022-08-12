import React from 'react';
import './Container.css';

import axios from 'axios';

function Container( { filmes, buscaTodos, buscaTitulo, remove, usuario, deslogaUsuario } ) {

    // Garante que as funções dentro dele só serão chamadas
    // apenas UMA VEZ durante toda a aplicação
    React.useEffect( () => buscaTodos(), [] );

    const pesquisa = ( e ) => {
        e.preventDefault();

        const titulo = e.target.titulo.value;
        buscaTitulo( titulo )

    }

    return (

        <div id="container" >

            {
                usuario.nome &&
                <p> Você está conectado como:
                    <strong> { usuario.nome } </strong>
                    <button onClick={ ()=> deslogaUsuario() } > Sair </button>
                </p>
            }

            <form onSubmit={ e => pesquisa( e ) } >
                <input name="titulo" type="text" placeholder="Pesquise um título..." />
                <button> <i class="fa-solid fa-magnifying-glass"></i> </button>
            </form>

            <ul>

                {
                    filmes == 0 ? <p> Carregando... </p> :

                    filmes.map( f => {

                        return(

                            <li className="animate__animated animate__bounceIn" > 
                                <h2> { f.titulo } </h2>
                                <p> { f.sinopse } </p>
                                <button className="btnAlterar" > <i class="fa-solid fa-pen-to-square"></i> </button>
                                <button onClick={ () => remove(f.id) } > <i class="fa-solid fa-trash"></i> </button>
                            </li>
                        )

                    })

                }


            </ul>

        </div>

    );

}

export default Container;

