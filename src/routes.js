const express = require('express');
const router = express.Router();
const auth = require('./middlewares/authMiddleware');
const adminAuth = require('./middlewares/adminAuthMiddleware');
const products = require('./controllers/products');

router.get('/products', products.list);
router.put('/products/:id/rating', auth, products.rating);
router.put('/products/:id/favorite', auth, products.favorite);

// with admin rights

router.put('/products/:id/availability', adminAuth, products.availability);

module.exports = router;
