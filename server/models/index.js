const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    port: dbConfig.PORT,
    operatorsAliases: 0
});

const db = {
    //import lib + paramètre db
    Sequelize: Sequelize,
    sequelize: sequelize,
    //import table
    citation: require("./citation.js")(sequelize, Sequelize)

};


module.exports = db;