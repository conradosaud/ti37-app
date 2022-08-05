import React from 'react';
import './Container.css';

import axios from 'axios';

function Container( { filmes, buscaTodos, buscaTitulo } ) {

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

            <form onSubmit={ e => pesquisa( e ) } >
                <input name="titulo" type="text" placeholder="Pesquise um título..." />
                <button> <i class="fa-solid fa-magnifying-glass"></i> </button>
            </form>

            <ul>

                {
                    filmes == 0 ? <p> Carregando... </p> :

                    filmes.map( f => {

                        return(

                            <li> 
                                <h2> { f.titulo } </h2>
                                <p> { f.sinopse } </p>
                                <button className="btnAlterar" > <i class="fa-solid fa-pen-to-square"></i> </button>
                                <button> <i class="fa-solid fa-trash"></i> </button>
                            </li>
                        )

                    })

                }


            </ul>

        </div>

    );

}

export default Container;

