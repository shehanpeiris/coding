module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  var blogpost = sequelize.define("post", {
    // This model needs a title, a body, and a category
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,160]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "personal"
    }
  });
  
  // Don't forget to 'return' the post after defining
  return blogpost;
};
