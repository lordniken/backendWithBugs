const express = require('express');
const router = express.Router();
const auth = require('./middlewares/authMiddleware');
const adminAuth = require('./middlewares/adminAuthMiddleware');
const products = require('./controllers/products');

router.get('/products', products.fetchProducts);
router.put('/products/:id/rating', auth, products.updateRating);
router.put('/products/:id/availability', adminAuth, products.updateAvailability);

module.exports = router;
