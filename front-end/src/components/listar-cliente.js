import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListarCliente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientes: []
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:8080/exemplo/cliente/listar-todos")
      .then(response => {
        this.setState({ clientes: response.data });
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Naturalidade</th>
            <th>Data de Nascimento</th>
            <th>CNH</th>
            <th>Validade CNH</th>
            <th>Tipo CNH</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Profissão</th>
          </tr>
        </thead>
        <tbody>
          {this.state.clientes.map(cliente => (
            <tr key={cliente.idCliente}>
              <td>{cliente.nome}</td>            
              <td>{cliente.cpf}</td>
              <td>{cliente.rg}</td>        
              <td>{cliente.naturalidade}</td>
              <td>{cliente.dataNascimento}</td>
              <td>{cliente.cnh}</td>
              <td>{cliente.cnhValidade}</td>
              <td>{cliente.cnhTipo}</td>
              <td>{cliente.endereco}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.email}</td>
              <td>{cliente.profissao}</td>
              <td>
                <Link to={`/cliente/cadastrar/${cliente.idCliente}`}>
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

export default ListarCliente;
