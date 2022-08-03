import React from 'react';
import './App.css';

import Menu from './Menu';
import Container from './Container';
import Modal from './Modal';

function App() {

    const [ modal, alteraModal ] = React.useState( false );

    return (

        <div id="app" >

            <Menu modal={ modal } alteraModal={ alteraModal } />
            <Container />
            <Modal modal={ modal } />

        </div>

    );

}

export default App;

