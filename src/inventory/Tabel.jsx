import React from 'react'
import { Table } from 'react-bootstrap'
const Tabel = ({barang, editData, hapusData }) => {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nama Barang</th>
            <th>Jenis barang</th>
            <th>Harga barang</th>
            <th>Qty</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
        {barang.map((barang, index) => {
          return (
            <tr key={index} >
              <td>{index+1}</td>
              <td>{barang.nama}</td>
              <td>{barang.jenis}</td>
              <td>{barang.harga}</td>
              <td>{barang.qty}</td>
              <td>
                <button className="btn btn-warning mr-2" onClick={() => editData(barang.id) }>Edit</button>
                <button className='btn btn-danger' onClick={() => hapusData(barang.id) }>Hapus</button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </Table>
    );
};

export default Tabel;
