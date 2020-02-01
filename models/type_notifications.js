module.exports = (sequelize, type) => {
    return sequelize.define('type_notifications', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        color: type.STRING,
    })
}