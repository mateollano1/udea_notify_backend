const Sequelize = require('sequelize')
const adminModel = require('./models/admin')
const typeNotificationModel = require('./models/type_notifications')
const notificationsModel = require('./models/notifications')
const dependenciesModel = require('./models/dependencies')
const userModel = require('./models/users')
const configurationModel = require('./models/configurations')
const eventsModel = require('./models/events')


const sequelize = new Sequelize('1zI2DaBwEU', '1zI2DaBwEU', 'Af65icJSgx', {
  host: 'remotemysql.com',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Admin = adminModel(sequelize, Sequelize);
const TypeNotification = typeNotificationModel(sequelize, Sequelize);
const Notification = notificationsModel(sequelize, Sequelize);
const Dependency = dependenciesModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);
const Configuration = configurationModel(sequelize, Sequelize);
const Event = eventsModel(sequelize, Sequelize); 

User.hasMany(Configuration)
Dependency.hasMany(User)
Dependency.hasMany(Admin)
Dependency.hasMany(Configuration)
Event.hasMany(Configuration)
Event.hasMany(Notification)
TypeNotification.hasMany(Notification)
Admin.hasMany(Notification)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  });

module.exports = {
  Admin,
  TypeNotification,
  Notification,
  Dependency,
  User,
  Configuration,
  Event
}