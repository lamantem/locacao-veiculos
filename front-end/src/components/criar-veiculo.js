import React, { Component } from "react";
import axios from "axios";
import ErroComponent from "./erro-component";

class CriarVeiculo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      marca: "",
      modelo: "",
      anoVeiculo: "",
      cor: "",
      placa: "",
      km: "",
      combustivelTipo: "",
      valorDiaria: "",
      carroTipo: "",
      errors: [],
      mensagem: null
    };

    this.salvar = this.salvar.bind(this);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  salvar(e) {
    e.preventDefault();

    const veiculos = {
      idVeiculos: this.state.id,
      marca: this.state.marca,
      modelo: this.state.modelo,
      anoVeiculo: this.state.anoVeiculo,
      cor: this.state.cor,
      placa: this.state.placa,
      km: this.state.km,
      combustivelTipo: this.state.combustivelTipo,
      valorDiaria: this.state.valorDiaria,
      carroTipo: this.state.carroTipo
    };

    axios
      .post("http://localhost:8080/exemplo/veiculos/salvar", veiculos)
      .then(res => {
        this.setState({
          marca: "",
          modelo: "",
          anoVeiculo: "",
          cor: "",
          placa: "",
          km: "",
          combustivelTipo: "",
          valorDiaria: "",
          carroTipo: "",
          errors: [],
          mensagem: "veiculo salvo com sucesso!"
        });
      })
      .catch(error => {
        this.setState({
          errors: error.response.data,
          mensagem: null
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.mensagem && <div>{this.state.mensagem}</div>}
        <form onSubmit={this.salvar}>
          <label>Marca: </label>
          <input
            type="text"
            name="marca"
            onChange={this.onChange}
            value={this.state.marca}
          />
          <ErroComponent erro={this.state.errors.marca} />
          <br />

          <label>Modelo: </label>
          <input
            type="text"
            name="modelo"
            onChange={this.onChange}
            value={this.state.modelo}
          />
          <ErroComponent erro={this.state.errors.modelo} />
          <br />

          <label>Ano do Veículo: </label>
          <input
            type="text"
            name="anoVeiculo"
            onChange={this.onChange}
            value={this.state.anoVeiculo}
          />
          <ErroComponent erro={this.state.errors.anoVeiculo} />
          <br />

          <label>Cor: </label>
          <input
            type="text"
            name="cor"
            onChange={this.onChange}
            value={this.state.cor}
          />
          <ErroComponent erro={this.state.errors.cor} />
          <br />

          <label>Placa: </label>
          <input
            type="text"
            name="placa"
            onChange={this.onChange}
            value={this.state.placa}
          />
          <ErroComponent erro={this.state.errors.placa} />
          <br />

          <label>KM: </label>
          <input
            type="text"
            name="km"
            onChange={this.onChange}
            value={this.state.km}
          />
          <ErroComponent erro={this.state.errors.km} />
          <br />

          <label>Tipo de Combustível: </label>
          <input
            type="text"
            name="combustivelTipo"
            onChange={this.onChange}
            value={this.state.combustivelTipo}
          />
          <ErroComponent erro={this.state.errors.combustivelTipo} />
          <br />

          <label>Valor da Diária: </label>
          <input
            type="text"
            name="valorDiaria"
            onChange={this.onChange}
            value={this.state.valorDiaria}
          />
          <ErroComponent erro={this.state.errors.valorDiaria} />
          <br />

          <label>Tipo de Veículo: </label>
          <input
            type="text"
            name="carroTipo"
            onChange={this.onChange}
            value={this.state.carroTipo}
          />
          <ErroComponent erro={this.state.errors.carroTipo} />
          <br />

          <button type="Submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default CriarVeiculo;
