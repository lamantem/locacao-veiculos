import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ListarCliente from "./components/listar-cliente.js";
import CriarCliente from "./components/criar-cliente.js";

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
        </ul>
        <div>
          <Route
            exact
            path="/cliente/cadastrar/:id?"
            component={CriarCliente}
          />
		  <Route 
		    exact 
			path="/cliente/listar" 
			component={ListarCliente} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
