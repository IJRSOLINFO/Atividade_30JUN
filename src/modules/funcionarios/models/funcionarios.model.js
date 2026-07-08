//! O model é responsável por gerenciar os dados da aplicação, ou seja, ele é responsável por armazenar, buscar, atualizar e deletar os dados dos funcionários. Ele é o responsável por interagir com o banco de dados e retornar os dados para o controller.

import funcionarios from "../../../config/database.js"

class FuncionarioModel {
  constructor(
    matricula,
    nome,
    email,
    cargo,
    departamento,
    salario,
    dataAdmissao,
  ) {
    this.matricula = matricula;
    this.nome = nome;
    this.email = email;
    this.cargo = cargo;
    this.departamento = departamento;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
  }
  static cadastrar(
    matricula,
    nome,
    email,
    cargo,
    departamento,
    salario,
    dataAdmissao,
  ) {
    const dados = {
      matricula,
      nome,
      email,
      cargo,
      departamento,
      salario,
      dataAdmissao,
    };
    funcionarios.push(dados);
  }
  static listarTodos() {
    return funcionarios;
  }
  static buscarPorMatricula(matricula) {
    const funcionario = funcionarios.find(
      (funcionario) => funcionario.matricula === matricula,
    );
    return funcionario;
  }
  static atualizarTotal(matricula,
    novoNome,
    novoEmail,
    novoCargo,
    novoDepartamento,
    novoSalario,
    novoDataAdmissao,
  ) {
    const funcionario = FuncionarioModel.listar(matricula);
    if (!funcionario) {
      return null;
    }
    funcionario.nome = novoNome;
    funcionario.email = novoEmail;
    funcionario.cargo = novoCargo;
    funcionario.departamento = novoDepartamento;
    funcionario.salario = novoSalario;
    funcionario.dataAdmissao = novoDataAdmissao;
    return funcionario;
  }
  static atualizarParcial(matricula,
    novoNome,
    novoEmail,
    novoCargo,
    novoDepartamento,
    novoSalario,
    novoDataAdmissao,
  ) {
    const funcionario = FuncionarioModel.listar(matricula);
     if (!funcionario) {
      return null;
    }
    funcionario.nome = novoNome || funcionario.nome;
    funcionario.email = novoEmail || funcionario.email;
    funcionario.cargo = novoCargo || funcionario.cargo;
    funcionario.departamento = novoDepartamento || funcionario.departamento;
    funcionario.salario = novoSalario || funcionario.salario;
    funcionario.dataAdmissao = novoDataAdmissao || funcionario.dataAdmissao;
    return funcionario;
  }

  static deletarPorMatricula(matricula) {
    const index = funcionarios.findIndex(
      (funcionario) => funcionario.matricula === matricula,
    );
    if (index !== -1) {
      funcionarios.splice(index, 1);
    }
  }
   
  static deletarTodos() {
    funcionarios.length = 0;
  }
}
export default FuncionarioModel;

//CRUD - Create, Read, Update, Delete
//Sigficado de cada letra do CRUD:
//C - Create: Criar um novo registro no banco de dados.
//R - Read: Ler os registros do banco de dados.
//U - Update: Atualizar um registro existente no banco de dados.
//D - Delete: Deletar um registro existente no banco de dados.
