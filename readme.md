#CRUD-API GRAPHQL TYPEGRAPHQL

**This API was done during Code Chrysalis Course**

- `yarn` : to install dependencies
- create database (in this ex:graphql)
- `yarn start` or `npm run start` to run server

- Add ormconfic.env:

```
{
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = your username
TYPEORM_PASSWORD = your password
TYPEORM_DATABASE = graphql
TYPEORM_PORT = your port
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = false
TYPEORM_ENTITIES = "src/entity/**/\*.ts"
TYPEORM_MIGRATIONS= "src/migration/**/_.ts"
TYPEORM_SUBSCRIBERS= "src/subscriber/\*\*/_.ts"
TYPEORM_ENTITIES_DIR= "src/entity"
TYPEORM_MIGRATIONS_DIR= "src/migration"
TYPEORM_SUBSCRIBERS_DIR= "src/subscriber"
}
```

- or add ormconfig.json file :

```
{

"type": "postgres",
"host": "localhost",
"port": your port ,
"username": your username,
"password”:your password ,
"database": “graphql,
"synchronize": true,
"logging": false,
"entities": ["src/entity/**/*.ts"],
"migrations": ["src/migration/**/*.ts"],
"subscribers": ["src/subscriber/**/*.ts"],
"cli": {
"entitiesDir": "src/entity",
"migrationsDir": "src/migration",
"subscribersDir": "src/subscriber"
}
```

- run migrations to seed database : ts-node ./node_modules/typeorm/cli.js migration:run

- [typeorm documentation](https://github.com/typeorm/typeorm/blob/master/docs/):
