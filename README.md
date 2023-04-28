# Boilerplate for Node-Express MVC with knex.js

A boilerplate to create rest api with Node.js, Express and Knex.js (query builder) for mysql, postgresql or others.


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
- **Dependency management**: with [NPM](https://www.npmjs.com/)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Linting**: with [ESLint](https://eslint.org)

## Commands

Running locally:

```bash
npm dev-start
```

Running in production:

```bash
npm start
```

## Project Structure

```
api\
 |--controllers\    # Route controllers (controller layer)
 |--models\         # knex model queries (data layer)
 |--routes\         # Routes
 |--helpers\        # Helper classes and functions
 |--middlewares\    # middleware functions
 |--views\          # any views available
 |-- knex.js\       # knex configuration file
config\             # configuration related things
db\                 # Migrations and Seed files
app.js\             # Express app
```

## License

[MIT](LICENSE)