package br.senai.sc.exemplo.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "veiculos")
public class Veiculos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idveiculos")
	private Long idVeiculos;

	@Column(name = "marca", nullable = false, length = 20)
	@NotBlank(message = "A marca é obrigatória!")
	@Size(max = 20, message = "A marca deve conter no máximo 20 caracteres!")
	private String marca;

	@Column(name = "modelo", nullable = false, length = 20)
	@NotBlank(message = "O modelo é obrigatório!")
	@Size(max = 20, message = "O modelo deve conter no máximo 20 caracteres!")
	private String modelo;

	@Column(name = "anoveiculo", nullable = false, length = 4)
	private int anoVeiculo;

	@Column(name = "cor", nullable = false)
	@NotBlank(message = "A cor é obrigatória!")
	private String cor;

	@Column(name = "placa", nullable = false, length = 8, unique = true)
	@NotBlank(message = "A Placa do Veículo é obrigatória!")
	@Size(message = "A Placa deve ser o padrão XXX-9999 ou ABC1234", max = 8, min = 7)
	private String placa;

	@Column(name = "km", nullable = false)
	private double km;

	@Column(name = "combustiveltipo", nullable = false)
	@NotBlank(message = "O tipo do combustível é obrigatório!")
	private String combustivelTipo;

	@Column(name = "valordiaria", nullable = false)
	private double valorDiaria;

	@Column(name = "carrotipo", nullable = false)
	@NotBlank(message = "O tipo do carro é obrigatório!")
	private String carroTipo;

	public Long getIdVeiculos() {
		return idVeiculos;
	}

	public void setIdVeiculos(Long idVeiculos) {
		this.idVeiculos = idVeiculos;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public int getAnoVeiculo() {
		return anoVeiculo;
	}

	public void setAnoVeiculo(int anoVeiculo) {
		this.anoVeiculo = anoVeiculo;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public double getKm() {
		return km;
	}

	public void setKm(double km) {
		this.km = km;
	}

	public String getCombustivelTipo() {
		return combustivelTipo;
	}

	public void setCombustivelTipo(String combustivelTipo) {
		this.combustivelTipo = combustivelTipo;
	}

	public double getValorDiaria() {
		return valorDiaria;
	}

	public void setValorDiaria(double valorDiaria) {
		this.valorDiaria = valorDiaria;
	}

	public String getCarroTipo() {
		return carroTipo;
	}

	public void setCarroTipo(String carroTipo) {
		this.carroTipo = carroTipo;
	}
}
