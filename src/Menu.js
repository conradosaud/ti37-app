import './Menu.css';

function Menu( { alteraModal, alteraModalUsuario, usuario } ) {

    return (

        <div id="menu" >

            <h1> Conradito Filmes </h1>

            {
                usuario.id ?
                    <button onClick={ () => alteraModal( true ) } > <i class="fa-solid fa-circle-plus"></i> </button>
                :
                    <button onClick={ () => alteraModalUsuario( true ) } > <i class="fa-solid fa-user-plus"></i> </button>
            }


        </div>

    );

}

export default Menu;

