# API - APP MEMÓRIA

### RF

[] Permitir que o usuário se cadastre ou seja cadastrado;
[] Permitir que o usuário cadastre uma data importante referêciando uma pessoa(contato);
[] Permitir que o usuário envie/aceite um convite para/de outro usuário;

### RNF

- [x] Utilizar typescript para desenvolver a api;
- [] Utilizar PostgresSQL;
- [] Utilizar TypeORM;
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
			gender: 'male' | 'female';
			zipcode: string;
			address: string;
			role: 'user' | 'admin'
		}
	```

- [] Permitir que com o usuário cadastrado e logado ele possa cadastrar seus gostos pessoais;
- [] Os gostos devem seguir a seguinte estrutura:

	```js
		interface Preferences {
      user_id: string;
			category: string;
			content: string;
		}
	```

### RN

- [] Ao enviar a solicitção de o usuário recebe um SMS com um código de verificação;
- [] Com o codígo em mãos o usuário prossegue no cadastro para criação da senha de acesso ao aplicativo;
