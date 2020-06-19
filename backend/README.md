# API - APP MEMÓRIA

### RF

[] Permitir que o usuário se cadastre ou seja cadastrado;
[] Permitir que o usuário cadastre uma data importante referêciando uma pessoa(contato);
[] Permitir que o usuário envie/aceite um convite para/de outro usuário;

### RNF

- [x] Utilizar typescript para desenvolver a api;
- [x] Utilizar PostgresSQL;
- [x] Utilizar TypeORM;
- [x] Utilizar padronização de código;

## MEU CADASTRO

Cadastro de usuário na aplicação

### RF

- [] Permitir que o usuário se cadastre ou seja cadastrado com os seguintes campos:

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
- [] permitir que o usuário seja autenticado para uso do aplicativo, com os seguintes dados:
  ```js
    interface Request {
      email: string;
      password: string;
    }

    interface Session {
      token: string;
      user: User;
    }
  ```
- [] Permitir que com o usuário cadastrado e logado ele possa cadastrar seus gostos pessoais;
- [] Os gostos devem seguir a seguinte estrutura:

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
- [] Com o telefone verificado o usuário deve poder prosseguir com cadastro para criação da conta no aplicativo;
