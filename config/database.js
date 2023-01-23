module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf31lumn6mpkr6fmmkag-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_nwnz'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Rvp7tOcOeLCJ6SALgGTvh3Wt36oqFwTB'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
