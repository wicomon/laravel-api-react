import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Tabla from './Tabla';
import Menu from './Menu';

import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';



function App() {

    const [lista, obtenerLista] = useState({});
    const [cargado, setCargado] = useState(false);

  const ConsultarAPI = async () => {
    const api = await fetch('http://localhost:8000/api/divisiones');
    const lista = await api.json();
    obtenerLista(lista);
    setCargado(true);
  }

  useEffect( () => {
    ConsultarAPI();
  }, []);


    return (
        <>
            <Header></Header>
            <Menu></Menu>
            {cargado ? <Tabla lista={lista}></Tabla> : null}
            
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
