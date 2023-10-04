const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: 'product_category'
        },
        {
          model: Tag,
          as: 'product_tags'
        }
      ]
    });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          as: 'product_category'
        },
        {
          model: Tag,
          as: 'product_tags'
        }
      ]
    });

    if (!product) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.
module.exports = router;
