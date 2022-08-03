import React from 'react';
import './Container.css';

import axios from 'axios';

function Container() {

    const [ filmes, alteraFilmes ] = React.useState( [] );

    // Garante que as funções dentro dele só serão chamadas
    // apenas UMA VEZ durante toda a aplicação
    React.useEffect( () => { 

        axios.get('http://localhost:3001/filmes')
        .then(function (response) {

            const dados = response.data;
            alteraFilmes( dados );

        })
        .catch(function (error) {

            console.log(error);

        })

    }, [] );

    const buscaTitulo = ( e ) => {
        e.preventDefault();

        const titulo = e.target.titulo.value;

        axios.get(`http://localhost:3001/busca_filmes/${titulo}` )
        .then(function (response) {

            const dados = response.data;
            alteraFilmes( dados );

        })
        .catch(function (error) {

            console.log(error);

        })

    }

    return (

        <div id="container" >

            <form onSubmit={ e => buscaTitulo( e ) } >
                <input name="titulo" type="text" placeholder="Pesquise um título..." />
                <button> P </button>
            </form>

            <ul>

                {
                    filmes == 0 ? <p> Carregando... </p> :

                    filmes.map( f => {

                        return(

                            <li> 
                                <h2> { f.titulo } </h2>
                                <p> { f.sinopse } </p>
                                <button className="btnAlterar" > A </button>
                                <button> R </button>
                            </li>
                        )

                    })

                }


            </ul>

        </div>

    );

}

export default Container;

