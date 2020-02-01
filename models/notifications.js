module.exports = (sequelize, type) => {
    return sequelize.define('notifications', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: type.STRING,
        link: type.STRING,
        message: type.STRING(500),
        date: type.DATE,
    })
}