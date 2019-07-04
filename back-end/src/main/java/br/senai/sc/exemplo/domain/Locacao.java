package br.senai.sc.exemplo.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "locacao")
public class Locacao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idlocacao")
	private Long idLocacao;

	@Column(name = "nome", nullable = false, length = 100)
	@NotBlank(message = "O nome é obrigatório!")
	@Size(max = 100, message = "O nome deve conter no máximo 100 caracteres!")
	private String nome;

	@Column(name = "cpf", nullable = false, length = 14, unique = true)
	@NotBlank(message = "O CPF é obrigatório!")
	@Size(message = "O CPF deve estar no padrão 999.999.999-99", max = 14, min = 14)
	private String cpf;

	@Column(name = "marca", nullable = false, length = 20)
	@NotBlank(message = "A marca é obrigatória!")
	@Size(max = 20, message = "A marca deve conter no máximo 20 caracteres!")
	private String marca;

	@Column(name = "modelo", nullable = false, length = 20)
	@NotBlank(message = "O modelo é obrigatório!")
	@Size(max = 20, message = "O modelo deve conter no máximo 20 caracteres!")
	private String modelo;

	@Column(name = "carrotipo", nullable = false)
	@NotBlank(message = "O tipo do carro é obrigatório!")
	private String carroTipo;

	@Column(name = "datainicio", nullable = false)
	@NotBlank(message = "A data de inicio é obrigatória!")
	@Temporal(TemporalType.DATE)
	@JsonFormat(pattern = "dd/MM/yyyy @HH:mm:ss")
	private Date dataInicio;

	@Column(name = "datatermino", nullable = false)
	@NotBlank(message = "A data de termino é obrigatória!")
	@Temporal(TemporalType.DATE)
	@JsonFormat(pattern = "dd/MM/yyyy @HH:mm:ss")
	private Date dataTermino;

	public Long getIdLocacao() {
		return idLocacao;
	}

	public void setIdLocacao(Long idLocacao) {
		this.idLocacao = idLocacao;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
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

	public String getCarroTipo() {
		return carroTipo;
	}

	public void setCarroTipo(String carroTipo) {
		this.carroTipo = carroTipo;
	}

	public Date getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(Date dataInicio) {
		this.dataInicio = dataInicio;
	}

	public Date getDataTermino() {
		return dataTermino;
	}

	public void setDataTermino(Date dataTermino) {
		this.dataTermino = dataTermino;
	}

	// SELECT datediff(l.datainicio, l.datatermino) FROM locacao l;

}
