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
      salario: 2500.00,
      dataAdmissao: "2022-01-15"
    },
    
    {
      matricula: 2,
      nome: "Maria Souza",
      email: "maria.souza@ijrsolinfo.com",
      cargo: "Analista",
      departamento: "Financeiro",
      salario: 3000.00,
      dataAdmissao: "2022-02-15" 
    },
    {
        matricula: 3,
      nome: "Carlos Pereira",
      email: "carlos.pereira@ijrsolinfo.com",
      cargo: "Gerente",
      departamento: "Vendas",
      salario: 5000.00,
      dataAdmissao: "2022-03-01"
    },
    {
    matricula: 4,
      nome: "João Maria",
      email: "joao.maria@ijrsolinfo.com",
      cargo: "Segurança",
      departamento: "Manuntenção",
      salario: 2500.00,
      dataAdmissao: "2022-01-10"
    }
];
app.get("/funcionarios", (requisição, resposta) => {
try {
    if (funcionarios.length === 0) {
        resposta.status(200).json({ mensagem: "Nenhum funcionário encontrado." });
    }
    resposta.status(200).json(funcionarios);
} catch (error) {
    resposta.status(500).json({mensagem: "Erro ao buscar funcionários.", erro: error.message});
    
}

});

app.listen (PORTA, () => {
console.log ("O Servidor está em execução!")
});