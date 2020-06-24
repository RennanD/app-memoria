# API - APP MEMÓRIA

### RF

- [x] Permitir que o usuário se cadastre ou seja cadastrado;
- [x] Permitir que o usuário seja autenticado na aplicação;
- [x] Permitir que o usuário cadastre uma data importante referêciando uma pessoa(contato);
- [x] CRUD de datas importantes e contatos;

### RNF

- [x] Utilizar typescript para desenvolver a api;
- [x] Utilizar PostgresSQL;
- [x] Utilizar TypeORM;
- [x] Utilizar padronização de código;

## MEU CADASTRO

Cadastro de usuário na aplicação

### RF

- [x] Permitir que o usuário se cadastre ou seja cadastrado com os seguintes campos:

	```js
  interface User {
    name: string;
    birthday: Date;
    email: string;
    cpf: string;
    gender: 'masculino' | 'feminino';
    zipcode: string;
    address: string;
    role: 'user' | 'admin'
  }
	```

- [x] Permitir que com o usuário cadastrado e logado ele possa cadastrar seus gostos pessoais;
- [x] Os gostos devem seguir a seguinte estrutura:

  ```js
  interface Preferences {
    person_id: string;
    category: string;
    content: string;
  }
  ```

### RN

- [x] O usuário deve receber um SMS com um código para verificação de seu telefone;
- [x] O usuário deve verificar seu telefone antes de concluir o cadastro;
- [x] Com o telefone verificado o usuário deve poder prosseguir com cadastro para criação da conta no aplicativo;

## SESSÕES NA APLICAÇÃO

### RF

- [x] permitir que o usuário seja autenticado para uso do aplicativo, com os seguintes dados:
  ```js
  interface Request {
    email: string;
    password: string;
  }
  ```

- [x] Permitir que o usuário possa encerrar sua sessão na aplicação;

### RNF

- [x] Usar autenticação via JSON Web Token (JWT);


### RN

- [x] Ao iniciar uma sessão deve ser retornado um token para o usuário para que ele possa ter acesso à aplicação;

  ```js
  interface Session {
    token: string;
    user: Account;
  }
  ```

- [x] O usuário só pode acessar a aplicação se estiver verificado;

- [x] Ao encerrar uma sessão o usuário deve ter o telefone "desverificado", para que na próxima sessão ele precise verificar novamente seu telefone;


## CRUD DE DATAS

Cadastro de datas importantes.

### RF

- [x] Adicionar um "contato" para ser relacionado à data que o usuário cadastrar;

- [x] O "Contato" deve seguir o seguinte formato:
  ```js
  interface Contact {
    id: string;
    name: string;
    phone_number: string;
    avatar?: string;
  }
  ```

- [x] Cadastrar uma data importante, a data deve serguir a seguinte estrutura:
  ```js
  interface ImportantDate {
    id: string;
    contact_id: string;
    user_id: string;
    date: Date;
    description: string;
  }
  ```

- [x] Listar Datas cadastradas por um usuário, as datas devem seguir o seguinte formato:

  ```js
  interface Date {
    id: string;
    date: Date;
    create_at: Date;
    updated_at: Date;
    contact: {
      id: string;
      name: string;
      avatar?: string;
    };
  }
  ```

- [x] Detalhar uma data específica, a data deve serguir o seguinte formato:

  ```js
  interface Date {
    id: string;
    date: Date;
    description: string;
    create_at: Date;
    updated_at: Date;
    contact: {
      id: string;
      phone_number: string;
      name: string;
      avatar?: string;
    };
  }
  ```

- [x] Listar datas de um contato específico, as datas devem seguir o seguinte formato:

  ```js
  interface Date {
    id: string;
    date: Date;
    create_at: Date;
    updated_at: Date;
    contact: {
      id: string;
      name: string;
      avatar?: string;
    };
  }
  ```

- [x] Editar um contato;

- [x] Editar uma data;

- [x] Excluir um contato;

- [x] Excluir uma data;


### RN

- [x] Ao criar uma data, a mesma deve ser relacionada a um contato cadastrado pelo usuário e possuir uma descrição de que data se trata aquele cadastro;
