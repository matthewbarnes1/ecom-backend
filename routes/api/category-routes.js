const router = require('express').Router();
const { Category, Product } = require('../../models');

router.post('/categories', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});


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

router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    if (req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: newProduct.id,
          tag_id,
        };
      });
      const productTags = await ProductTag.bulkCreate(productTagIdArr);
      res.status(201).json(newProduct);
    } else {
      res.status(200).json(newProduct);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/categories/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/categories/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.json({ message: 'Category deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
