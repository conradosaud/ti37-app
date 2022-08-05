import './Menu.css';

function Menu( props ) {

    const alteraModal = () => {
        props.alteraModal( true );
    }

    return (

        <div id="menu" >

            <h1> Conradito Filmes </h1>
            <button onClick={ () => alteraModal() } > <i class="fa-solid fa-circle-plus"></i> </button>

        </div>

    );

}

export default Menu;

