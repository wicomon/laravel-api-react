import React, {useEffect} from 'react';
import {Table, Button, Row, Col, Input, Select, Radio  } from 'antd';
const { Search } = Input;
const { Option } = Select;

const Tabla = ({lista}) => {

    const filtro=[];
        lista.map(elemento => (
            filtro.push({
                text: elemento.nombre,
                value: elemento.nombre
            })
        ));
    
        const filtro2=[];
        lista.map(elemento => (
            filtro2.push({
                text: elemento.div_superior,
                value: elemento.div_superior
            })
        ));

    

    const columns=[
        {
            title: 'division',
            dataIndex: 'division',
            key: 'division',
            filters: filtro,
            onFilter: (value, record) => record.division.indexOf(value) === 0,
            sorter: (a, b) => a.division.length - b.division.length,
            sortDirections: ['ascend','descend'],
        },
        {
            title: 'Division Superior',
            dataIndex: 'div_superior',
            key: 'div_superior',
            filters: filtro2,
            onFilter: (value, record) => record.div_superior.indexOf(value) === 0,
            sorter: (a, b) => a.div_superior.length - b.div_superior.length,
            sortDirections: ['ascend','descend'],
        },
        {
            title: 'Colaboradores',
            dataIndex: 'colaboradores',
            key: 'colaboradores',
            sorter: {
                compare: (a, b) => a.colaboradores - b.colaboradores,
                multiple: 3,
              },
        },
        {
            title: 'Nivel',
            dataIndex: 'nivel',
            key: 'nivel',
            sorter: {
                compare: (a, b) => a.nivel - b.nivel,
                multiple: 3,
              },
        },
        {
            title: 'Subdivisiones',
            dataIndex: 'subdivisiones',
            key: 'subdivisiones',
            sorter: {
                compare: (a, b) => a.subdivisiones - b.subdivisiones,
                multiple: 3,
              },
        },
        {
            title: 'Embajadores',
            dataIndex: 'embajadores',
            key: 'embajadores'
        }
    ]
    const data=[
        lista.map(elemento => (
            {
                key: elemento.id,
                division: elemento.nombre,
                div_superior: elemento.div_superior,
                colaboradores: elemento.cantidad,
                nivel: elemento.nivel,
                subdivisiones: elemento.subdivision,
                embajadores: elemento.embajador
            }
        ))
    ]
    console.log(data[0]);

    return (
        <div className="container">
        <Row className="d-flex justify-content-between align-items-center mx-3 my-3">
            <Col>
            <Radio.Group defaultValue="a" size="middle">
            <Radio.Button value="a">Listado</Radio.Button>
            <Radio.Button value="b">Arbol</Radio.Button>
            </Radio.Group>
            
            </Col>
            <Col>
            <Select
                showSearch
                style={{ width: 150 }}
                placeholder="Columnas"
                optionFilterProp="children"
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
            >
                <Option value="1">Opcion 1</Option>
                <Option value="2">Opcion 2</Option>
                <Option value="3">Opcion 3</Option>
            </Select>

            <Search className="mx-2" placeholder="Buscar" allowClear style={{ width: 200 }} />
            </Col>
        </Row>

        <Table columns={columns} dataSource={data[0]}></Table>
        </div>
    );
}
 
export default Tabla;