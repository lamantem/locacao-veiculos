package br.senai.sc.exemplo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.senai.sc.exemplo.domain.Cliente;
import br.senai.sc.exemplo.exceptions.CustomRuntimeException;
import br.senai.sc.exemplo.repositories.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;

	public Cliente salvar(Cliente cliente) {
		Optional<Cliente> usuarioOptional = this.clienteRepository.findByCpf(cliente.getCpf());
		if (usuarioOptional.isPresent()) {
			Cliente clienteCpf = usuarioOptional.get();
			if (cliente.getIdCliente() == null || cliente.getIdCliente() != clienteCpf.getIdCliente()) {
				throw new CustomRuntimeException("cpf", "CPF já cadastrado!");
			}
		}
		return this.clienteRepository.save(cliente);
	}

	public Cliente buscarPorCPF(String cpf) {
	    if (cpf == null) {
	      throw new CustomRuntimeException("cpf", "Não foi informado um CPF para consulta!");
	    }
	    Optional<Cliente> Cliente = this.clienteRepository.buscarPorCPF(cpf);
	    if (Cliente.isPresent()) {
	      return Cliente.get();
	    }
	    return null;
	  }

	  public Iterable<Cliente> buscarTodos() {
	    return this.clienteRepository.findAll();
	  }
}
