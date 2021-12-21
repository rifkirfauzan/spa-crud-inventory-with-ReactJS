import React, {Component} from 'react'
import Tabel from './Tabel'
import NavbarComponent from './NavbarComponent'
import Formulir from './Formulir'

export default class Inventory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             barang: [],
             nama: "",
             jenis: "",
             harga: "",
             qty: "",
             id: "",
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) =>   {
        event.preventDefault();

        if(this.state.id === ""){
            this.setState({
                barang:[
                    ...this.state.barang,
                    {
                        id: this.state.barang.length+1,
                        nama: this.state.nama,
                        jenis: this.state.jenis,
                        harga: this.state.harga,
                        qty: this.state.qty,
                    }
                ]
            })
        }else{
            const getNotBarang = this.state.barang
            .filter((barang) => barang.id !== this.state.id)
            .map((filterBarang)  => {
                return filterBarang
            });

            this.setState({
                barang:[
                    ...getNotBarang,
                    {
                        id: this.state.barang.length+1,
                        nama: this.state.nama,
                        jenis: this.state.jenis,
                        harga: this.state.harga,
                        qty: this.state.qty
                    }
                ]
            })
        }


        this.setState({
            nama: "",
            jenis: "",
            harga: "",
            qty: "",
            id: "",
        })
    }

    editData = (id) => {
       const getBarang = this.state.barang
       .filter((barang) => barang.id === id)
       .map((filterBarang)  => {
           return filterBarang
       })
       this.setState({
        nama: getBarang[0].nama,
        jenis: getBarang[0].jenis,
        harga: getBarang[0].harga,
        qty: getBarang[0].qty,
        id: getBarang[0].id,
    })
    }

    hapusData = (id) => {
        const getDeleteBarang = this.state.barang
            .filter((barang) => barang.id !== id)
            .map((filterBarang)  => {
                return filterBarang
            });

            this.setState({
                barang: getDeleteBarang
            })

    }

    render() {
        console.log(this.state.barang);
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                        <h2>Daftar data barang</h2>
                    <Tabel barang={this.state.barang} editData={this.editData} hapusData={this.hapusData} />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}