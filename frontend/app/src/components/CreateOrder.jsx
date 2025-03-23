import React, { useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';

const CreateOrder = () => {
    const [formData, setFormData] = useState({
        numeroPedido: '',
        nomeCliente: '',
        telefoneCliente: '',
        dataEntrada: '',
        dataEntrega: '',
        cidadeCliente: '',
        observacao: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do pedido:', formData);
        // Aqui você pode enviar os dados para sua API ou realizar outras ações
    };
    return (
        <Card className="mb-2 " style={{ height: "270px" }}>
            {/* <Card.Header as="h5">Cabeçalho do Pedido</Card.Header> */}
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col md={2}>
                            <Form.Group controlId="numeroPedido">
                                {/* <Form.Label>Número do Pedido</Form.Label> */}
                                <Form.Control
                                    type="text"
                                    name="numeroPedido"
                                    value={formData.numeroPedido}
                                    onChange={handleChange}
                                    readOnly
                                    placeholder='Id do Pedido'
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="nomeCliente">
                                {/* <Form.Label>Nome do Cliente</Form.Label> */}
                                <Form.Control
                                    type="text"
                                    name="nomeCliente"
                                    value={formData.nomeCliente}
                                    placeholder='Nome do Cliente'
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={3}>
                            <Form.Group controlId="telefoneCliente">
                                {/* <Form.Label>Telefone do Cliente</Form.Label> */}
                                <Form.Control
                                    type="tel"
                                    name="telefoneCliente"
                                    value={formData.telefoneCliente}
                                    onChange={handleChange}
                                    placeholder="(00) 00000-0000"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={3}>
                            <Form.Group controlId="dataEntrada">
                                <Form.Label>Data de Entrada</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dataEntrada"
                                    value={formData.dataEntrada}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={3}>
                            <Form.Group controlId="dataEntrega">
                                <Form.Label>Data de Entrega</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dataEntrega"
                                    value={formData.dataEntrega}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="cidadeCliente">
                                <Form.Label>Cidade do Cliente</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cidadeCliente"
                                    value={formData.cidadeCliente}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="observacao">
                                {/* <Form.Label>Observação</Form.Label> */}
                                <Form.Control
                                    as="textarea"
                                    rows={1}
                                    cols={3}
                                    name="observacao"
                                    value={formData.observacao}
                                    onChange={handleChange}
                                    placeholder="Informações adicionais sobre o pedido..."
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col md={2}>
                            <Button variant="primary" className="" type='submit'>
                                Salvar
                            </Button>
                        </Col>
                        <Col md={2}>
                            <Button variant="secondary" className="" type='reset'>
                                Cancelar
                            </Button>
                        </Col>



                    </Row>
                </Form>
            </Card.Body>

        </Card>
    );
};

export default CreateOrder;



// <div className="d-flex justify-content-end">

// </div>