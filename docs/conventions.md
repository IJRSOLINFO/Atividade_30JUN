# Coding Conventions

Este documento define o padrão de nomenclatura e organização adotado no projeto. Todas as novas implementações devem seguir estas convenções para garantir consistência, legibilidade e facilidade de manutenção.

---

# Convenções de Nomenclatura

## Variáveis de Ambiente

As variáveis de ambiente devem utilizar **UPPER_SNAKE_CASE** (letras maiúsculas separadas por `_`).

**Exemplos:**

```env
DATABASE_URL=
API_KEY=
JWT_SECRET=
NODE_ENV=
PORT=
```

**Não utilizar:**

```env
databaseUrl
DatabaseUrl
database_url
```

---

## Variáveis Globais

Variáveis globais devem utilizar **Camel Case** (`camelCase`).

**Exemplos:**

```javascript
applicationConfig
currentUser
systemSettings
globalCache
```

---

## Variáveis Locais

Variáveis locais devem utilizar **camelCase**, com nomes claros e descritivos.

**Exemplos:**

```javascript
userName
totalAmount
isAuthenticated
requestTimeout
```

Evite nomes genéricos como:

```javascript
x
temp
data1
obj
```

---

## Constantes

Constantes devem utilizar **UPPER_SNAKE_CASE**.

**Exemplos:**

```javascript
MAX_RETRY_COUNT
DEFAULT_TIMEOUT
API_VERSION
CACHE_EXPIRATION
```

---

## Funções

Funções devem utilizar **camelCase** e iniciar, preferencialmente, com um verbo.

**Exemplos:**

```javascript
calculateTotal()
getUserById()
sendEmail()
validateToken()
```

---

## Métodos

Os métodos seguem o mesmo padrão das funções: **camelCase**.

**Exemplos:**

```javascript
save()
updateProfile()
deleteUser()
generateReport()
```

---

## Classes

Classes devem utilizar **PascalCase**.

**Exemplos:**

```javascript
UserService
AuthenticationController
DatabaseConnection
PaymentGateway
```

---

## Interfaces

Interfaces devem utilizar **PascalCase**.

**Exemplos:**

```typescript
User
AuthenticationRequest
DatabaseOptions
```

> Caso o projeto já utilize o prefixo `I`, mantenha a consistência em todo o código.

---

## Enums

Enums devem utilizar **PascalCase**.

Os membros do enum devem utilizar **UPPER_SNAKE_CASE**.

**Exemplo:**

```typescript
enum UserRole {
    ADMIN,
    MANAGER,
    CUSTOMER
}
```

---

## Arquivos

Utilizar **kebab-case**.

**Exemplos:**

```
user-service.ts
authentication-controller.ts
database-config.ts
```

---

## Diretórios

Utilizar **kebab-case**.

**Exemplos:**

```
controllers
services
repositories
shared
user-management
```

---

## Componentes (Frontend)

Componentes devem utilizar **PascalCase**.

**Exemplos:**

```text
LoginForm.tsx
UserCard.tsx
NavigationMenu.tsx
```

---

## Hooks (React)

Hooks devem iniciar com `use` e utilizar **camelCase**.

**Exemplos:**

```javascript
useAuthentication()
useWindowSize()
useApi()
```

---

## Tipos (TypeScript)

Tipos devem utilizar **PascalCase**.

**Exemplos:**

```typescript
UserResponse
ApiError
LoginPayload
```

---

## Booleans

Variáveis booleanas devem começar com um prefixo que indique claramente seu propósito.

**Prefixos recomendados:**

- `is`
- `has`
- `can`
- `should`

**Exemplos:**

```javascript
isActive
hasPermission
canEdit
shouldReload
```

---

# Boas Práticas

- Utilize nomes descritivos e de fácil compreensão.
- Evite abreviações desnecessárias.
- Mantenha consistência em todo o projeto.
- Prefira clareza em vez de nomes curtos.
- Utilize inglês para nomes de variáveis, funções, classes e arquivos.

---

# Resumo

| Elemento | Convenção | Exemplo |
|----------|-----------|----------|
| Variáveis de Ambiente | `UPPER_SNAKE_CASE` | `DATABASE_URL` |
| Variáveis Globais | `camelCase` | `applicationConfig` |
| Variáveis Locais | `camelCase` | `userName` |
| Constantes | `UPPER_SNAKE_CASE` | `MAX_RETRY_COUNT` |
| Funções | `camelCase` | `calculateTotal()` |
| Métodos | `camelCase` | `updateProfile()` |
| Classes | `PascalCase` | `UserService` |
| Interfaces | `PascalCase` | `User` |
| Types | `PascalCase` | `UserResponse` |
| Enums | `PascalCase` | `UserRole` |
| Valores de Enum | `UPPER_SNAKE_CASE` | `ADMIN` |
| Componentes React | `PascalCase` | `LoginForm` |
| Hooks | `camelCase` com prefixo `use` | `useAuthentication()` |
| Arquivos | `kebab-case` | `user-service.ts` |
| Diretórios | `kebab-case` | `user-management` |