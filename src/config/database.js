module.exports = {
  dialect: 'postgres',
  host: '/cloudsql/${INSTANCE_CONNECTION_NAME}',
  username: 'MUDA',
  password: 'MUDA',
  database: 'MUDA',
  define: {
    timestamps: true,
    underscored: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    socketPath: '/cloudsql/${INSTANCE_CONNECTION_NAME}',
  },
  logging: false,
  operatorsAliases: false,
};
