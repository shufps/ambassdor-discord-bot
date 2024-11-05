// Require Sequelize
const Sequelize = require('sequelize');
const {Ambassador} = require(`./ambassador.js`);
const {Message} = require(`./message.js`);

const sequelize = new Sequelize('botdb', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

const Ambassadors = sequelize.define('ambassadors', Ambassador);
const Messages = sequelize.define('messages', Message);

module.exports.Ambassadors = Ambassadors;
module.exports.Messages = Messages