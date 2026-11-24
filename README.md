
# 📦 StockManager | Frontend

![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular_Material-DD0031?style=for-the-badge&logo=angular)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_desenvolvimento-yellow?style=for-the-badge)

## 📋 Sobre o projeto

O **StockManager** é uma aplicação web full stack desenvolvida para auxiliar no gerenciamento de estoque de distribuidoras de materiais de construção.

O sistema tem como objetivo centralizar o controle de produtos, fornecedores, categorias e movimentações de estoque, proporcionando maior organização, segurança e eficiência nos processos operacionais.

O frontend foi desenvolvido utilizando Angular 20, com uma interface responsiva e integrada a uma API REST construída em Java com Spring Boot.

## 🚀 Funcionalidades

- 🔐 Autenticação utilizando JWT.
- 📊 Dashboard com indicadores de estoque.
- 📦 Cadastro e gerenciamento de produtos.
- 🗂️ Gerenciamento de categorias.
- 🚚 Cadastro e gerenciamento de fornecedores.
- 📥 Registro de entradas de estoque.
- 📤 Registro de saídas de estoque.
- 🔄 Ajustes de estoque.
- 👥 Gerenciamento de usuários.
- 🛡️ Controle de acesso por perfil.
- 📑 Exportação de relatórios em CSV.
- ⚠️ Consulta de produtos com estoque baixo.
- 📱 Interface responsiva.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| Angular 20 | Framework frontend |
| TypeScript | Linguagem de programação |
| Angular Material | Componentes de interface |
| Reactive Forms | Gerenciamento de formulários |
| SCSS | Estilização da aplicação |
| HttpClient | Comunicação com a API REST |
| JWT | Autenticação |
| Git e GitHub | Controle de versão |

## 🏗️ Arquitetura

A aplicação utiliza uma arquitetura cliente-servidor, separando a interface gráfica das regras de negócio e da persistência dos dados.

```text
Frontend — Angular 20
         │
         │ HTTP / REST / JWT
         ▼
Backend — Java 21 / Spring Boot
         │
         │ JPA / Hibernate
         ▼
Banco de dados — H2
```

## 📁 Estrutura do projeto

```text
stockmanager-frontend/
├── src/
│   ├── app/
│   │   └── app.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── proxy.conf.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## ⚙️ Pré-requisitos

Para executar o frontend localmente, é necessário possuir:

- Node.js 22.12 ou superior da linha 22.
- NPM.
- Git (opcional).
- Backend StockManager em execução.

Para executar o backend:

- Java JDK 21.
- Apache Maven 3.9 ou superior.

## 💻 Como executar

### 1. Clonar o repositório

```bash
git clone https://github.com/felipemitchell/stockmanager-frontend.git
```

### 2. Acessar a pasta do projeto

```bash
cd stockmanager-frontend
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o backend

Na pasta do projeto Spring Boot, execute:

```bash
mvn spring-boot:run
```

O backend deverá estar disponível em:

```text
http://localhost:8080
```

### 5. Iniciar o frontend

```bash
npm start
```

Acesse a aplicação pelo navegador:

```text
http://localhost:4200
```

Utilize as credenciais administrativas configuradas no backend para realizar o login.

## 🔗 Integração com a API

O frontend realiza a comunicação com o backend por meio de requisições HTTP.

Durante o desenvolvimento, o arquivo `proxy.conf.json` encaminha as requisições iniciadas por `/api` para o servidor Spring Boot na porta 8080.

### Principais endpoints

| Endpoint | Funcionalidade |
|---|---|
| `/api/auth/login` | Autenticação |
| `/api/auth/me` | Dados do usuário autenticado |
| `/api/products` | Gerenciamento de produtos |
| `/api/categories` | Gerenciamento de categorias |
| `/api/suppliers` | Gerenciamento de fornecedores |
| `/api/users` | Gerenciamento de usuários |
| `/api/stock-movements` | Movimentações de estoque |
| `/api/dashboard/summary` | Indicadores do dashboard |
| `/api/reports/stock` | Relatório de estoque |
| `/api/reports/low-stock` | Relatório de estoque baixo |

A documentação da API pode ser consultada pelo Swagger:

http://localhost:8080/swagger-ui/index.html

## 🔒 Segurança

A aplicação utiliza autenticação baseada em JSON Web Token (JWT).

- Armazenamento do token em `sessionStorage`.
- Envio do token nas requisições autenticadas.
- Controle de acesso conforme o perfil do usuário.
- Restrição de funcionalidades administrativas.
- Validação das permissões pelo backend.
- Alteração de estoque exclusivamente por movimentações.

Informações sensíveis, como senhas administrativas e chaves JWT, não devem ser armazenadas no código-fonte do frontend.

## 📦 Build para produção

Para gerar uma versão de produção:

```bash
npm run build
```

Os arquivos compilados serão disponibilizados no diretório `dist/`.

O ambiente de produção deverá possuir uma configuração adequada de proxy reverso para `/api` e fallback SPA para `index.html`.

## 🧪 Status do desenvolvimento

O frontend encontra-se em desenvolvimento, com as principais funcionalidades estruturadas.

### Próximas etapas

- [ ] Validar a compilação do projeto.
- [ ] Validar os DTOs e enums com o backend.
- [ ] Testar autenticação e permissões.
- [ ] Validar operações CRUD.
- [ ] Testar movimentações de estoque.
- [ ] Validar indicadores do dashboard.
- [ ] Testar exportação de relatórios.
- [ ] Implementar testes automatizados.
- [ ] Realizar deploy da aplicação.

Os contratos de integração foram inicialmente estruturados com base na documentação do backend e estão sujeitos a ajustes após a validação dos controllers e DTOs no Swagger.

## 🎯 Objetivos de aprendizagem

O projeto proporciona experiência prática em:

- Desenvolvimento frontend com Angular.
- Integração entre frontend e backend.
- Consumo de APIs REST.
- Autenticação e autorização com JWT.
- Desenvolvimento de sistemas de gerenciamento.
- Arquitetura de aplicações full stack.
- Versionamento de código com Git e GitHub.

## 👨‍💻 Desenvolvedor

**Felipe Mitchell Campos Ramos**

Estudante de Análise e Desenvolvimento de Sistemas.

[![GitHub](https://img.shields.io/badge/GitHub-felipemitchell-181717?style=for-the-badge&logo=github)](https://github.com/felipemitchell)

---

📦 **StockManager** — Tecnologia aplicada à gestão de estoque.
