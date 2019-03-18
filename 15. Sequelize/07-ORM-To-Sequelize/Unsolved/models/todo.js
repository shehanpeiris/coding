module.exports = function(sequelize, DataTypes) {
    var todo = sequelize.define("todos", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return todo;
}