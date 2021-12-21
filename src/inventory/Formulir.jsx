import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = ({
  nama,
  jenis,
  harga,
  qty,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit data" : "Tambah data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jenis">
              <Form.Label>Jenis</Form.Label>
              <Form.Control
                type="text"
                name="jenis"
                value={jenis}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qty">
              <Form.Label>Qty</Form.Label>
              <Form.Control
                type="number"
                name="qty"
                value={qty}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Tambah data
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
