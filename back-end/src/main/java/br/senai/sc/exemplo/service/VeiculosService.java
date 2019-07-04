package br.senai.sc.exemplo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.senai.sc.exemplo.domain.Veiculos;
import br.senai.sc.exemplo.exceptions.CustomRuntimeException;
import br.senai.sc.exemplo.repositories.VeiculosRepository;

@Service
public class VeiculosService {

	@Autowired
	private VeiculosRepository veiculosRepository;

	public Veiculos salvar(Veiculos Veiculos) {
		Optional<Veiculos> VeiculoOptional = this.veiculosRepository.findByPlaca(Veiculos.getPlaca());
		if (VeiculoOptional.isPresent()) {
			Veiculos VeiculosPlaca = VeiculoOptional.get();
			if (Veiculos.getIdVeiculos() == null || Veiculos.getIdVeiculos() != VeiculosPlaca.getIdVeiculos()) {
				throw new CustomRuntimeException("placa", "PLACA já cadastrada!");
			}
		}
		return this.veiculosRepository.save(Veiculos);
	}

	public Iterable<Veiculos> buscarTodos() {
		return this.veiculosRepository.findAll();
	}

}
