## Rota / Recurso

### Métodos HTTP:

- GET: Buscar uma informação do back-end
- POST: Criar uma informação no back-end
- PUT: Alterar uma informação no back-end
- DELETE: Deletar uma informação no back-end

### Tipos de parâmetros

- Query Params (request.query): Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
- Route Params (request.params): Parâmetros utilizados para identificar recursos
- Request Body: Corpo da requisição, utilizado para cirar ou alterar recursos

### Banco de Dados
- SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
- NoSQL: MongoDB, CouchDB, etc

- Driver: SELECT * FROM users
- Query Builder (KNEX.js): table('users').select('*').where();

### Comandos

```
$ mkdir backend
$ cd backend
$ npm init -y
$ npm install express
$ npm install nodemon -D
$ npm install knex
$ npm install sqlite3
$ npx knex init
$ npm start
$ npx knex migrate:make create_ongs
$ npx knex migrate:latest 
$ npx knex migrate:make create_incidents
$ npx knex migrate:latest
$ npm install cors
```

```
$ npx create-react-app frontend
$ cd frontend
$ npm start
```