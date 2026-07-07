import funcionarios from "../../config/database.js";

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
  static listar() {
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

  static deletarTodos() {
    funcionarios.length = 0;
  }

  static deletarPorMatricula(matricula) {
    const index = funcionarios.findIndex(
      (funcionario) => funcionario.matricula === matricula,
    );
  }
}
export default FuncionarioModel;
