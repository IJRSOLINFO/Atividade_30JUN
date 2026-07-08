//TODO: esse é o controlado, articulador de requisições, ele não deve conter regras de negócio, apenas chamar os serviços e retornar a resposta para o usuário
//? O  controller é responsável por receber as requisições do usuário, chamar os serviços e retornar a resposta para o usuário. Ele é o responsável por tratar os erros e retornar as respostas adequadas para o usuário.

import FuncionarioModel from "../models/funcionarios.model.js";

class FuncionarioController {
  static cadastrar(requisição, resposta) {
    //TODO: Implementar lógica de cadastro
    try {
      const {
        matricula,
        nome,
        email,
        cargo,
        departamento,
        salario,
        dataAdmissao,
      } = requisição.body;
      if (
        !matricula ||
        !nome ||
        !email ||
        !cargo ||
        !departamento ||
        !salario ||
        !dataAdmissao
      )
        return resposta
          .status(400)
          .json({ mensagem: "Todos os campos são obrigatórios." });

      FuncionarioModel.cadastrar(
        matricula,
        nome,
        email,
        cargo,
        departamento,
        salario,
        dataAdmissao,
      );
      resposta
        .status(201)
        .json({ mensagem: "Funcionário cadastrado com sucesso." });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao cadastrar funcionário.",
        erro: error.message,
      });
    }
  }

  static listarTodos(requisição, resposta) {
    try {
      const funcionarios = FuncionarioModel.listar();
      if (funcionarios.length === 0) {
        resposta
          .status(200)
          .json({ mensagem: "Nenhum funcionário encontrado." });
      }
      resposta.status(200).json(funcionarios);
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao listar funcionários.",
        erro: error.message,
      });
    }
  }
  static buscarPorMatricula(requisição, resposta) {
    try {
      const matricula = requisição.params;
      const funcionario = FuncionarioModel.buscarPorMatricula(matricula);
      if (!funcionario) {
        return resposta
          .status(200)
          .json({ mensagem: "Funcionário não encontrado." });
      }
      resposta.status(200).json(funcionario);
    } catch (error) {
      resposta
        .status(500)
        .json({ mensagem: "Erro ao buscar funcionário.", erro: error.message });
    }
  }
  static atualizarTotal(requisição, resposta) {
    try {
      const matricula = requisição.params.matricula;
      const { nome, email, cargo, departamento, salario, dataAdmissao } =
        requisição.body;
      const funcionario = FuncionarioModel.atualizarTotal(
        matricula,
        nome,
        email,
        cargo,
        departamento,
        salario,
        dataAdmissao,
      );
      resposta.status(200).json({ funcionario });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao atualizar funcionário.",
        erro: error.message,
      });
    }
  }

  static atualizarParcial(requisição, resposta) {
    try {
      const matricula = requisição.params.matricula;
      const { nome, email, cargo, departamento, salario, dataAdmissao } =
        requisição.body;
      const funcionario = FuncionarioModel.atualizarParcial(
        matricula,
        nome,
        email,
        cargo,
        departamento,
        salario,
        dataAdmissao,
      );
      resposta.status(200).json({ funcionario });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao atualizar funcionário.",
        erro: error.message,
      });
    }
  }

  static deletarTodos(requisição, resposta) {
    try {
      FuncionarioModel.deletarTodos();
      resposta
        .status(200)
        .json({ mensagem: "Todos os funcionários foram deletados." });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao deletar funcionários.",
        erro: error.message,
      });
    }
  }

  static deletarPorMatricula(requisição, resposta) {
    try {
      const matricula = requisição.params.matricula;
      const funcionario = FuncionarioModel.buscarPorMatricula(matricula);
      if (!funcionario) {
        return resposta
          .status(404)
          .json({ mensagem: "Funcionário não encontrado." });
      }
      FuncionarioModel.deletarPorMatricula(matricula);
      resposta
        .status(200)
        .json({ mensagem: "Funcionário deletado com sucesso." });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao deletar funcionário.",
        erro: error.message,
      });
    }
  }
}
export default FuncionarioController;