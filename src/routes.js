const express = require('express');
const router = express.Router();
const auth = require('./middlewares/authMiddleware');
const products = require('./controllers/products');

router.get('/products', products.fetchProducts);
router.patch('/products/:id/rating', auth, products.updateRating);

module.exports = router;
