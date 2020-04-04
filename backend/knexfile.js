// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      user : 'root',
      database : 'bossabox',
      filename: './src/database/db.mysql'
    },
    migrations: {
      directory: './src/database/migrations',
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
