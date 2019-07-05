package br.senai.sc.exemplo.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import br.senai.sc.exemplo.domain.Cliente;
import br.senai.sc.exemplo.domain.Veiculos;

public interface VeiculosRepository extends CrudRepository<Veiculos, Long> {

	Optional<Veiculos> findByPlaca(String placa);

	@Query(value = "SELECT v FROM Veiculos v WHERE lower(v.placa) like lower(CONCAT('%',:placa,'%'))")
	Optional<Veiculos> buscarPorPlaca(@Param("placa") String placa);
	
}