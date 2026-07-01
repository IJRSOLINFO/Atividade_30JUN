import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORTA = process.env.PORTA || 3000;
const app = express();

app.use(express.json());

// CRUD de funcionários
// matricula
// nome
// email
// cargo
// departamento
// salario
// dataAdmissao

const funcionarios = [
  {
    matricula: 1,
    nome: "João Silva",
    email: "joão.silva@ijrsolinfo.com",
    cargo: "Secretário",
    departamento: "Administração",
    salario: 2500.0,
    dataAdmissao: "2022-01-15",
  },
  {
    matricula: 2,
    nome: "Maria Souza",
    email: "maria.souza@ijrsolinfo.com",
    cargo: "Analista",
    departamento: "Financeiro",
    salario: 3000.0,
    dataAdmissao: "2022-02-15",
  },
  {
    matricula: 3,
    nome: "Carlos Pereira",
    email: "carlos.pereira@ijrsolinfo.com",
    cargo: "Gerente",
    departamento: "Vendas",
    salario: 5000.0,
    dataAdmissao: "2022-03-01",
  },
  {
    matricula: 4,
    nome: "João Maria",
    email: "joao.maria@ijrsolinfo.com",
    cargo: "Segurança",
    departamento: "Manuntenção",
    salario: 2500.0,
    dataAdmissao: "2022-01-10",
  },
];
app.get("/listar", (requisição, resposta) => {
  try {
    if (funcionarios.length === 0) {
      resposta.status(200).json({ mensagem: "Nenhum funcionário encontrado." });
    }
    resposta.status(200).json(funcionarios);
  } catch (error) {
    resposta
      .status(500)
      .json({ mensagem: "Erro ao buscar funcionários.", erro: error.message });
  }
});

app.get("/listar/:matricula", (requisição, resposta) => {
  try {
    const matricula = requisição.params.matricula;
    const funcionario = funcionarios.find(
      (funcionario) => funcionario.matricula === matricula,
    );

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
});

app.post("/cadastrar", (requisição, resposta) => {
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
    const novoFuncionario = {
      matricula,
      nome,
      email,
      cargo,
      departamento,
      salario,
      dataAdmissao,
    };
    if (
      !matricula ||
      !nome ||
      !email ||
      !cargo ||
      !departamento ||
      !salario ||
      !dataAdmissao
    ) {
      return resposta
        .status(400)
        .json({ mensagem: "Todos os campos são obrigatórios." });
    }
    funcionarios.push(novoFuncionario);
    resposta.status(201).json({
      mensagem: "Funcionário cadastrado com sucesso.",
      funcionario: novoFuncionario,
    });
  } catch (error) {
    resposta.status(500).json({
      mensagem: "Erro ao cadastrar funcionário.",
      erro: error.message,
    });
  }
});

app.put("/atualizar/:matricula", (requisição, resposta) => {
  try {
    const matricula = requisição.params.matricula;
    const funcionario = funcionarios.find(
      (funcionario) => funcionario.matricula === matricula,
    );
    if (!funcionario) {
      return resposta
        .status(404)
        .json({ mensagem: "Funcionário não encontrado." });
    }
    const {
      novoNome,
      novoEmail,
      novoCargo,
      novoDepartamento,
      novoSalario,
      novoDataAdmissao,
    } = requisição.body;
    if (
      !novoNome ||
      !novoEmail ||
      !novoCargo ||
      !novoDepartamento ||
      !novoSalario ||
      !novoDataAdmissao
    ) {
      return resposta
        .status(201)
        .json({ mensagem: "Todos os campos são obrigatórios." });
    }
    funcionario.nome = novoNome;
    funcionario.email = novoEmail;
    funcionario.cargo = novoCargo;
    funcionario.departamento = novoDepartamento;
    funcionario.salario = novoSalario;
    funcionario.dataAdmissao = novoDataAdmissao;
    resposta
      .status(200)
      .json({ mensagem: "Funcionário atualizado com sucesso.", funcionario });
  } catch (error) {
    resposta.status(500).json({
      mensagem: "Erro ao atualizar funcionário.",
      erro: error.message,
    });
  }
});

app.patch("/atualizar/:matricula", (requisição, resposta) => {
  try {
    const matricula = requisição.params.matricula;
    const funcionario = funcionarios.find(
      (funcionario) => funcionario.matricula === matricula,
    );
    if (!funcionario) {
      return resposta
        .status(404)
        .json({ mensagem: "Funcionário não encontrado." });
    }
    const {
      novoNome,
      novoEmail,
      novoCargo,
      novoDepartamento,
      novoSalario,
      novoDataAdmissao,
    } = requisição.body;
    funcionario.nome = novoNome || funcionario.nome;
    funcionario.email = novoEmail || funcionario.email;
    funcionario.cargo = novoCargo || funcionario.cargo;
    funcionario.departamento = novoDepartamento || funcionario.departamento;
    funcionario.salario = novoSalario || funcionario.salario;
    funcionario.dataAdmissao = novoDataAdmissao || funcionario.dataAdmissao;
    resposta
      .status(200)
      .json({ mensagem: "Funcionário atualizado com sucesso.", funcionario });
  } catch {
    error;
    resposta
      .status(500)
      .json({
        mensagem: "Erro ao atualizar funcionário.",
        erro: error.message,
      });
  }
});

app.delete("/excluir/todos", (requisição, resposta) => {
  try {
    funcionarios.length = 0;
    resposta.status(200).json({ mensagem: "Todos os funcionários foram excluídos." });
  } catch (error) {
    resposta.status(500).json({mensagem: "Erro ao excluir funcionários.",erro: error.message}); 
  }
});

app.delete("/excluir/:matricula", (requisição, resposta) => {
  try {
    const matricula = requisição.params.matricula;
    const funcionarioIndex = funcionarios.findIndex(funcionario => funcionario.matricula === matricula);
    if (funcionarioIndex === -1) {
      return resposta.status(404).json({ mensagem: "Funcionário não encontrado." });
    }
    funcionarios.splice(funcionarioIndex, 1);
    resposta.status(200).json({ mensagem: "Funcionário excluído com sucesso." });
  } catch (error) {
    resposta.status(500).json({mensagem: "Erro ao excluir funcionário.",erro: error.message}); 
  }
});

app.listen(PORTA, () => {
  console.log("O Servidor está em execução!");
});


// {
//   "matricula": "6",
//    "nome": "Chico Pilombeta",
//     "email": "C.Pilombeta@ijrsolinfo.com",
//     "cargo": "Articulador",
//     "departamento": "Comunicação Social",
//     "salario": 3500.00,
//     "dataAdmissao": "2022-07-01"
// }