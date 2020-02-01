module.exports = (sequelize, type) => {
    return sequelize.define('admin', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        rol: type.STRING,
        name: type.STRING,
        lastName: type.STRING,
        email: type.STRING,
        password: type.STRING,
    })
}