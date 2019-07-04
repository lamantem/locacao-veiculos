import React, { Component } from "react";
import axios from "axios";
import ErroComponent from "./erro-component";

class CriarCliente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      nome: "",
      cpf: "",
      rg: "",
      naturalidade: "",
      dataNascimento: "",
      cnh: "",
      cnhValidade: "",
      cnhTipo: "",
      endereco: "",
      telefone: "",
      email: "",
      profissao: "",
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

    const cliente = {
      idCliente: this.state.id,
      nome: this.state.nome,
      cpf: this.state.cpf,
      rg: this.state.rg,
      naturalidade: this.state.naturalidade,
      dataNascimento: this.state.dataNascimento,
      cnh: this.state.cnh,
      cnhValidade: this.state.cnhValidade,
      cnhTipo: this.state.cnhTipo,
      endereco: this.state.endereco,
      telefone: this.state.telefone,
      email: this.state.email,
      profissao: this.state.profissao
    };

    axios
      .post("http://localhost:8080/exemplo/cliente/salvar", cliente)
      .then(res => {
        this.setState({
          nome: "",
          cpf: "",
          rg: "",
          naturalidade: "",
          dataNascimento: "",
          cnh: "",
          cnhValidade: "",
          cnhTipo: "",
          endereco: "",
          telefone: "",
          email: "",
          profissao: "",
          errors: [],
          mensagem: "Cliente salvo com sucesso!"
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
          <label>Nome: </label>
          <input
            type="text"
            name="nome"
            onChange={this.onChange}
            value={this.state.nome}
          />
          <ErroComponent erro={this.state.errors.nome} />
          <br />

          <label>CPF: </label>
          <input
            type="text"
            name="cpf"
            onChange={this.onChange}
            value={this.state.cpf}
          />
          <ErroComponent erro={this.state.errors.cpf} />
          <br />

          <label>RG: </label>
          <input
            type="text"
            name="rg"
            onChange={this.onChange}
            value={this.state.rg}
          />
          <ErroComponent erro={this.state.errors.rg} />
          <br />

          <label>Naturalidade: </label>
          <input
            type="text"
            name="naturalidade"
            onChange={this.onChange}
            value={this.state.naturalidade}
          />
          <ErroComponent erro={this.state.errors.naturalidade} />
          <br />

          <label>Data de Nascimento: </label>
          <input
            type="text"
            name="dataNascimento"
            onChange={this.onChange}
            value={this.state.dataNascimento}
          />
          <ErroComponent erro={this.state.errors.dataNascimento} />
          <br />

          <label>CNH: </label>
          <input
            type="text"
            name="cnh"
            onChange={this.onChange}
            value={this.state.cnh}
          />
          <ErroComponent erro={this.state.errors.cnh} />
          <br />

          <label>Validade da CNH: </label>
          <input
            type="text"
            name="cnhValidade"
            onChange={this.onChange}
            value={this.state.cnhValidade}
          />
          <ErroComponent erro={this.state.errors.cnhValidade} />
          <br />

          <label>Tipo de CNH: </label>
          <input
            type="text"
            name="cnhTipo"
            onChange={this.onChange}
            value={this.state.cnhTipo}
          />
          <ErroComponent erro={this.state.errors.cnhTipo} />
          <br />

          <label>Endereço: </label>
          <input
            type="text"
            name="endereco"
            onChange={this.onChange}
            value={this.state.endereco}
          />
          <ErroComponent erro={this.state.errors.endereco} />
          <br />

          <label>Telefone: </label>
          <input
            type="text"
            name="telefone"
            onChange={this.onChange}
            value={this.state.telefone}
          />
          <ErroComponent erro={this.state.errors.telefone} />
          <br />

          <label>E-mail: </label>
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
          />
          <ErroComponent erro={this.state.errors.email} />
          <br />

          <label>Profissão: </label>
          <input
            type="text"
            name="profissao"
            onChange={this.onChange}
            value={this.state.profissao}
          />
          <ErroComponent erro={this.state.errors.profissao} />
          <br />

          <button type="Submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default CriarCliente;
