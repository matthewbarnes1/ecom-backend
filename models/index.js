// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Product, {
  foreignKey: 'driver_id',
});

Product.belongsToMany(Tag, {

Tag.belongsToMany(Product, {


// ! You'll need to execute association methods on your Sequelize models to create the following relationships between them:

// TODO: Product belongs to Category, and Category has many Product models, as a category can have multiple products but a product can only belong to one category.
//* One to many


// TODO: Product belongs to many Tag models, and Tag belongs to many Product models. Allow products to have multiple tags and tags to have many products by using the ProductTag through model.
//* Many to many 

// TODO: Hint: Make sure you set up foreign key relationships that match the column we created in the respective models.


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};