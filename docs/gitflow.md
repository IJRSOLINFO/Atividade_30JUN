# Git Flow

Este documento define o fluxo de trabalho com Git adotado neste projeto. Todos os colaboradores devem seguir estas diretrizes para manter um histórico limpo, facilitar revisões e reduzir conflitos.

---

# Objetivos

- Padronizar o processo de desenvolvimento.
- Facilitar a colaboração entre os membros da equipe.
- Manter o histórico de commits organizado.
- Garantir maior estabilidade da branch principal.

---

# Estrutura de Branches

## `main`

A branch `main` representa a versão estável do projeto.

### Regras

- Deve conter apenas código pronto para produção.
- Não realizar commits diretamente nesta branch.
- Alterações devem ocorrer somente através de Pull Requests.

---

## `develop`

Branch destinada à integração das funcionalidades em desenvolvimento.

### Regras

- Recebe todas as novas funcionalidades.
- Deve permanecer funcional durante todo o ciclo de desenvolvimento.
- Nunca realizar commits diretamente sem necessidade.

---

# Branches de Trabalho

## Feature

Utilizada para desenvolvimento de novas funcionalidades.

### Nome

```text
feature/nome-da-funcionalidade
```

### Exemplos

```text
feature/login
feature/user-profile
feature/payment-api
```

### Origem

```text
develop
```

### Destino

```text
develop
```

---

## Bugfix

Utilizada para correção de erros encontrados durante o desenvolvimento.

### Nome

```text
bugfix/descricao-do-problema
```

### Exemplos

```text
bugfix/login-validation
bugfix/token-expiration
bugfix/payment-timeout
```

### Origem

```text
develop
```

### Destino

```text
develop
```

---

## Hotfix

Utilizada para correções urgentes em produção.

### Nome

```text
hotfix/descricao-do-problema
```

### Exemplos

```text
hotfix/security-fix
hotfix/database-error
hotfix/payment-failure
```

### Origem

```text
main
```

### Destino

```text
main
```

Após o merge em `main`, o hotfix também deve ser incorporado à `develop`.

---

## Release

Preparação para uma nova versão do sistema.

### Nome

```text
release/x.y.z
```

### Exemplos

```text
release/1.0.0
release/1.2.0
release/2.0.0
```

### Origem

```text
develop
```

### Destino

```text
main
```

Após o merge em `main`, a release deve ser mesclada novamente em `develop`.

---

# Fluxo de Desenvolvimento

```text
main
 │
 ├───────────────┐
 │               │
 ▼               │
develop          │
 │               │
 ├── feature/* ──┤
 ├── bugfix/* ───┤
 └── release/* ──► main
                  │
                  └── hotfix/*
```

---

# Commits

Todos os commits devem seguir o padrão **Conventional Commits**.

## Tipos

| Tipo | Utilização |
|-------|------------|
| `feat` | Nova funcionalidade |
| `fix` | Correção de erro |
| `docs` | Documentação |
| `style` | Formatação de código |
| `refactor` | Refatoração sem alteração de comportamento |
| `perf` | Melhoria de desempenho |
| `test` | Adição ou alteração de testes |
| `build` | Alterações de build |
| `ci` | Integração contínua |
| `chore` | Tarefas de manutenção |

---

## Exemplos

```text
feat: adiciona autenticação por JWT

fix: corrige erro na validação do login

docs: atualiza documentação da API

refactor: simplifica serviço de usuários

test: adiciona testes para autenticação

chore: atualiza dependências
```

---

# Pull Requests

Todo Pull Request deve conter:

- Título objetivo.
- Descrição da alteração.
- Motivação da mudança.
- Evidências (quando aplicável).
- Referência à Issue correspondente (se houver).

---

# Checklist para Pull Request

Antes de solicitar revisão, confirme:

- [ ] O projeto compila sem erros.
- [ ] Todos os testes estão passando.
- [ ] Não existem conflitos com a branch de destino.
- [ ] O código segue o padrão definido em `conventions.md`.
- [ ] Não existem arquivos temporários.
- [ ] Não existem credenciais ou informações sensíveis.
- [ ] A documentação foi atualizada quando necessário.

---

# Regras Gerais

- Nunca realizar commit diretamente na `main`.
- Evite commits muito grandes.
- Faça commits pequenos e com propósito único.
- Escreva mensagens de commit claras e objetivas.
- Atualize sua branch antes de abrir um Pull Request.
- Resolva conflitos antes de solicitar revisão.
- Remova branches já mescladas.

---

# Versionamento

O projeto utiliza o padrão **Semantic Versioning (SemVer)**.

Formato:

```text
MAJOR.MINOR.PATCH
```

## Exemplos

```text
1.0.0
1.1.0
1.1.3
2.0.0
```

### Regras

| Tipo | Quando utilizar |
|--------|-----------------|
| MAJOR | Alterações incompatíveis com versões anteriores |
| MINOR | Novas funcionalidades compatíveis |
| PATCH | Correções de bugs |

---

# Fluxo Resumido

```text
Nova funcionalidade
        │
        ▼
feature/*
        │
        ▼
develop
        │
        ▼
release/*
        │
        ▼
main

Correção urgente
        │
        ▼
hotfix/*
        │
        ▼
main
        │
        ▼
develop
```

---

# Boas Práticas

- Faça commits frequentes.
- Utilize nomes de branches descritivos.
- Revise o código antes de abrir um Pull Request.
- Evite misturar diferentes tipos de alterações no mesmo commit.
- Mantenha sua branch sincronizada com a branch de origem.
- Priorize um histórico de commits limpo e fácil de entender.

---

# Referências

- **Git Flow** para organização das branches.
- **Conventional Commits** para padronização das mensagens de commit.
- **Semantic Versioning (SemVer)** para controle de versões.