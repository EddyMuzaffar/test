module.exports = (sequelize, Sequelize) => {
    const citation = sequelize.define("citation", {
        citation: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        favori: {
            type: Sequelize.BOOLEAN
        }
    });

    return citation;
};