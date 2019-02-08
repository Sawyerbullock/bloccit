'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rule = sequelize.define('Rule', {
    source: DataTypes.STRING,
    description: DataTypes.STRING,
    topicID: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "Topics",
        key: "id",
        as: "topicId",
      }
    }
  }, {});
  Rule.associate = function(models) {
    // associations can be defined here
    Rule.belongsTo(models.Topic, {
      foreignKey: "topicID",
      onDelete: "CASCADE",
    });
  };
  return Rule;
};
