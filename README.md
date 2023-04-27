# Boilerplate for Node-Express MVC with knex.js (query builder)

A boilerplate to create rest api with Node.js, Express and Knex.js for mysql, postgresql or others.


## Manual Installation

Clone the repo:

```bash
git clone https://github.com/gangeshberi/nodejs-mvc-boilerplate
cd nodejs-mvc-boilerplate
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```


## Features

- **Query Builder**: [Knex.js](https://knexjs.org/)
- **Migration and Seed**: DB migration and Seed using [Knex-CLI/Migration CLI](https://knexjs.org/guide/migrations.html#migration-cli) 
- **Error handling**: centralized error handling
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Linting**: with [ESLint](https://eslint.org)

## Commands

Running locally:

```bash
npm dev-start
```

## License

[MIT](LICENSE)