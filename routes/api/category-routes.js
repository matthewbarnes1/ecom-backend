const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: {
        model: Product,
        as: 'category_product'
      }
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
