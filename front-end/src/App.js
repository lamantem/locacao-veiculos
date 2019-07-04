import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ListarCliente from "./components/listar-cliente.js";
import CriarCliente from "./components/criar-cliente.js";
import CriarVeiculo from "./components/criar-veiculo";
import ListarVeiculo from "./components/listar-veiculo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/cliente/cadastrar">Cadastrar Clientes</Link>
          </li>
          <li>
            <Link to="/cliente/listar">Listar Cliente</Link>
          </li>
          <li>
            <Link to="/veiculos/cadastrar">Cadastrar Veículo</Link>
          </li>
          <li>
            <Link to="/veiculos/listar">Listar Veículo</Link>
          </li>
        </ul>
        <div>
          <Route
            exact
            path="/cliente/cadastrar/:id?"
            component={CriarCliente}
          />
          <Route
            exact
            path="/veiculos/cadastrar/:id?"
            component={CriarVeiculo}
          />
          <Route exact path="/cliente/listar" component={ListarCliente} />
          <Route exact path="/veiculos/listar" component={ListarVeiculo} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
