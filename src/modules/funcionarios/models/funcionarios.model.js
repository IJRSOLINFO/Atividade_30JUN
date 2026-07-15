//! O model é responsável por gerenciar os dados da aplicação, ou seja, ele é responsável por armazenar, buscar, atualizar e deletar os dados dos funcionários. Ele é o responsável por interagir com o banco de dados e retornar os dados para o controller.

import conexao from "../../../config/database.js";

class FuncionarioModel {      
  static async cadastrar(
    matricula,
    nome,
    email,
    cargo,
    departamento,
    salario,
    dataAdmissao,
  ) {
    const dados = [
      matricula,
      nome,
      email,
      cargo,
      departamento,
      salario,
      dataAdmissao,
    ];
    const query = `INSERT INTO funcionarios (matricula, nome, email, cargo, departamento, salario, dataAdmissao) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows[0];
  }

  static async listarTodos() {
    const query = `SELECT * FROM funcionarios`;
    const resultado = await conexao.query(query);
    return resultado.rows;
  }

  static async buscarPorMatricula(matricula) {
    const dados = [matricula];
    const query = `SELECT * FROM funcionarios WHERE matricula = $1`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }

  static async atualizarTotal(
    matricula,
    novoNome,
    novoEmail,
    novoCargo,
    novoDepartamento,
    novoSalario,
    novoDataAdmissao,
  ) {
    const funcionario = await FuncionarioModel.buscarPorMatricula(matricula);
    if (funcionario.length === 0) {
      return null;
    }
    const dados = [
      novoNome,
      novoEmail,
      novoCargo,
      novoDepartamento,
      novoSalario,
      novoDataAdmissao,
      matricula,
    ];
    const query = `UPDATE funcionarios SET nome = $2, email = $3, cargo = $4, departamento = $5, salario = $6, dataAdmissao = $7 WHERE matricula = $1 RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }

  static async atualizarParcial(  
    matricula,
    novoNome,
    novoEmail,
    novoCargo,
    novoDepartamento,
    novoSalario,
    novoDataAdmissao,
  ) {
    const funcionario = await FuncionarioModel.buscarPorMatricula(matricula);
    if (funcionario.length === 0) {
      return null;
    }
    const dados = [
      novoNome,
      novoEmail,
      novoCargo,
      novoDepartamento,
      novoSalario,
      novoDataAdmissao,
      matricula,
    ];
    const query = `UPDATE funcionarios SET nome =  coalesce ($2,nome), email =  coalesce ($3,email), cargo = coalesce ($4,cargo), departamento = coalesce ($5,departamento), salario = coalesce ($6,salario), dataAdmissao = coalesce ($7,data_admissao) WHERE matricula = $1 RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }

  static async deletarPorMatricula(matricula) {
    const dados = [matricula];
    const query = `DELETE FROM funcionarios WHERE matricula = $1`;
    const resultado = await conexao.query(query, dados);
    if (funcionario.length === 0) {
      return null;
    }
    return resultado.rows;
  }

  static async deletarTodos() {
    const query = `DELETE FROM funcionarios returning*`;
    const resultado = await conexao.query(query);
    return resultado;
  }
}
export default FuncionarioModel;



//TODO: CRUD - Create, Read, Update, Delete
//?Sigficado de cada letra do CRUD:
//C - Create: Criar um novo registro no banco de dados.
//R - Read: Ler os registros do banco de dados.
//U - Update: Atualizar um registro existente no banco de dados.
//D - Delete: Deletar um registro existente no banco de dados.

