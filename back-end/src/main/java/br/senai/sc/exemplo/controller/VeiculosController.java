package br.senai.sc.exemplo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.senai.sc.exemplo.components.MapValidationComponent;
import br.senai.sc.exemplo.domain.Veiculos;
import br.senai.sc.exemplo.service.VeiculosService;

@RestController
@RequestMapping("/exemplo/veiculos")
@CrossOrigin
public class VeiculosController {

	@Autowired
	private VeiculosService veiculosService;

	@Autowired
	private MapValidationComponent mapValidationComponent;

	@PostMapping("/salvar")
	public ResponseEntity<?> salvar(@RequestBody @Valid Veiculos veiculos, BindingResult result) {
		ResponseEntity<?> errors = this.mapValidationComponent.mapValidationError(result);
		if (errors != null) {
			return errors;
		}
		Veiculos veiculosSalvo = this.veiculosService.salvar(veiculos);
		return new ResponseEntity<Veiculos>(veiculosSalvo, HttpStatus.OK);
	}

	@GetMapping("/listar-todos")
	public ResponseEntity<?> listarTodos() {
		Iterable<Veiculos> veiculos = this.veiculosService.buscarTodos();
		return new ResponseEntity<Iterable<Veiculos>>(veiculos, HttpStatus.OK);
	}
}