/* eslint-disable no-undef */
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListarVeiculo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      veiculos: []
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:8080/exemplo/veiculos/listar-todos")
      .then(response => {
        this.setState({ veiculos: response.data });
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Cor</th>
            <th>Placa</th>
            <th>KM</th>
            <th>Combustível</th>
            <th>Diária</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {this.state.veiculos.map(veiculos => (
            <tr key={veiculos.idVeiculos}>
              <td>{veiculos.marca}</td>
              <td>{veiculos.modelo}</td>
              <td>{veiculos.anoVeiculo}</td>
              <td>{veiculos.cor}</td>
              <td>{veiculos.placa}</td>
              <td>{veiculos.km}</td>
              <td>{veiculos.combustivelTipo}</td>
              <td>{veiculos.valorDiaria}</td>
              <td>{veiculos.carroTipo}</td>
              <td>
                <Link to={`/veiculo/cadastrar/${veiculos.idVeiculos}`}>
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ListarVeiculo;
