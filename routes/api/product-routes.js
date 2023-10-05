const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

const productIncludes = [
  {
    model: Category,
    as: 'product_category'
  },
  {
    model: Tag,
    as: 'product_tags'
  }
];

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({ include: productIncludes });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, { include: productIncludes });

    if (!product) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
