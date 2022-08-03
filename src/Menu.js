import './Menu.css';

function Menu( props ) {

    const alteraModal = () => {
        props.alteraModal( true );
    }

    return (

        <div id="menu" >

            <h1> Conradito Filmes </h1>
            <button onClick={ () => alteraModal() } > + </button>

        </div>

    );

}

export default Menu;

