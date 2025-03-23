import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import ImageDropZone from './ImageDropZone';
import { useDropzone } from 'react-dropzone';

import 'bootstrap/dist/css/bootstrap.min.css';


function FormPainel() {
    const [formData, setFormData] = useState({
        descricao: '',
        largura: '',
        altura: '',
        tecido: 'Tactel',
        acabamento: {
            overloque: false,
            elastico: false,
            ilhos: false,
        },
        observacao: '',
    });

    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                acabamento: { ...formData.acabamento, [name]: checked },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
        console.log('Imagens:', images);
    };

    // Configuração do Dropzone
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        multiple: true,
        onDrop: (acceptedFiles) => {
            setImages([...images, ...acceptedFiles.map((file) =>
                Object.assign(file, { preview: URL.createObjectURL(file) })
            )]);
        }
    });

    // Remover imagem da lista
    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    return (
        <Container className="mt-4">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="descricao">
                            <Form.Control placeholder="Descrição do Painel" type="text" name="descricao" value={formData.descricao} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group controlId="largura">
                            <Form.Control type="number" name="largura" placeholder="Largura" value={formData.largura} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group controlId="altura">
                            <Form.Control type="number" name="altura" placeholder="Altura" value={formData.altura} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <Form.Group controlId="tecido">
                            <Form.Label>Vendedor</Form.Label>
                            <Form.Select name="vendedor" onChange={handleChange} required>
                                <option value="andre">Andre</option>
                                <option value="carol">Carol</option>
                                <option value="maicon">Maicon</option>
                                <option value="robson">Robson</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="designer">
                            <Form.Label>Designer</Form.Label>
                            <Form.Select name="designer" onChange={handleChange} required>
                                <option value="andre">Andre</option>
                                <option value="carol">Carol</option>
                                <option value="fabio">Fabio</option>
                                <option value="maicon">Maicon</option>
                                <option value="robson">Robson</option>
                                <option value="willis">Willis</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <br />
                <hr />
                <Row>
                    <Col>
                        <Form.Group controlId="tecido">
                            <Form.Label>Tecido</Form.Label>
                            <Form.Select name="tecido" value={formData.tecido} onChange={handleChange} required>
                                <option value="Tactel">Tactel</option>
                                <option value="Malha Vest Facil">Malha Vest Facil</option>
                            </Form.Select>
                        </Form.Group>
                        <br></br>
                        <Card>
                            <Card.Header>Acabamento</Card.Header>
                            <Card.Body>
                                <Form.Check type="checkbox" label="Overloque" name="overloque" checked={formData.acabamento.overloque} onChange={handleChange} />
                                <Form.Check type="checkbox" label="Elástico" name="elastico" checked={formData.acabamento.elastico} onChange={handleChange} />
                                <Form.Check type="checkbox" label="Ilhós" name="ilhos" checked={formData.acabamento.ilhos} onChange={handleChange} />
            
                            </Card.Body>
                        </Card>
                        <Form.Group controlId="tipoEmenda">
                            <Form.Label>Selecione o tipo de emenda</Form.Label>
                            <Form.Select name="emenda" onChange={handleChange} required>
                                <option value="sem-emenda">Sem emenda</option>
                                <option value="vertical">Vertical</option>
                                <option value="horizontal">Horizontal</option>
                            </Form.Select>
                        </Form.Group>
                        <br />
                        <Form.Group controlId="observacao">
                            <Form.Label>Observação da Costura</Form.Label>
                            <Form.Control as="textarea" rows={1} name="observacao" value={formData.observacao} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <ImageDropZone></ImageDropZone>
                    </Col>
                </Row>
                <br />
                <hr />

                <Row>
                    <Col>
                        <Form.Group controlId="valorpainel">
                            <Form.Label>Valor do Painel</Form.Label>
                            <Form.Control as="input" type='number' rows={1} name="valorPainel" required onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>

                        </Form.Group>
                    </Col>
                </Row>
                    <Col>
                        <Button variant="danger" type="reset" className="mt-3">Apagar</Button>
                        <Button variant="success" type="submit" className="mt-3">Salvar</Button>
                    </Col>
            </Form>
        </Container>
    );
}

export default FormPainel;
