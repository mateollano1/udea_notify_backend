module.exports = (sequelize, type) => {
    return sequelize.define('admin', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        lastName: type.STRING,
        email: type.STRING,
        idDevice: type.STRING
    })
}