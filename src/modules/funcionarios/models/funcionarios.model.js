//! O model é responsável por gerenciar os dados da aplicação, ou seja, ele é responsável por armazenar, buscar, atualizar e deletar os dados dos funcionários. Ele é o responsável por interagir com o banco de dados e retornar os dados para o controller.

import conexao from "../../../config/database.js"

class FuncionarioModel {
    
  static async cadastrar(matricula,nome,email,cargo,departamento,salario,dataAdmissao) {
    const dados = [matricula,nome,email,cargo,departamento,salario,dataAdmissao];
    const query = `text INSERT INTO funcionarios (matricula, nome, email, cargo, departamento, salario, data_admissao) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`
    const resultado = await conexao.query(query, dados);
    return resultado.rows[0];
  }
   
  static async listarTodos() {
    const query = `SELECT * FROM funcionarios`;
    const resultado = await conexao.query(query);
    return resultado;
  }
    
  static async buscarPorMatricula(matricula) {
    const dados = [matricula];
    const query = `SELECT * FROM funcionarios WHERE matricula = $1`;
    const resultado = await conexao.query(query, dados);
    return resultado;
  }
    
  static async atualizarTotal(matricula,novoNome,novoEmail,novoCargo,novoDepartamento,novoSalario,novoDataAdmissao) {
    const funcionario = await FuncionarioModel.buscarPorMatricula(matricula);
    if (funcionario.length === 0) {
      return null;
    }
    const dados = [novoNome, novoEmail, novoCargo, novoDepartamento, novoSalario, novoDataAdmissao, matricula];
    const query = `UPDATE funcionarios SET nome = $2, email = $3, cargo = $4, departamento = $5, salario = $6, data_admissao = $7 WHERE matricula = $1 RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows[0];

  }
  static async atualizarTotal(matricula,novoNome,novoEmail,novoCargo,novoDepartamento,novoSalario,novoDataAdmissao) {
    const funcionario = await FuncionarioModel.buscarPorMatricula(matricula);
    if (funcionario.length === 0) {
      return null;
    }
    const dados = [novoNome, novoEmail, novoCargo, novoDepartamento, novoSalario, novoDataAdmissao, matricula];
    const query = `UPDATE funcionarios SET nome =  coalesce ($2,nome), email =  coalesce ($3,email), cargo = coalesce ($4,cargo), departamento = coalesce ($5,departamento), salario = coalesce ($6,salario), data_admissao = coalesce ($7,data_admissao) WHERE matricula = $1 RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows[0];
  }

  static asyncdeletarPorMatricula(matricula) {
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
