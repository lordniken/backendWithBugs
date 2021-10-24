const products = require('../mock/products');

exports.list = (_req, res) => {
  // #swagger.tags = ['User endpoints']
  
  return res.status(200).json(products);
};

exports.rating = (req, res) => {
  /*
    #swagger.tags = ['User endpoints']
    #swagger.description = 'Change product rating (from 0 to 5)'
    #swagger.parameters['obj'] = {
      in: 'body',
      schema: {
          $rating: 5,
      }
    } 
  */
  const { id } = req.params;
  const findedProduct = products.find(product => product.id === id);

  if (!findedProduct) {
    return res.status(404).json();
  }

  if (Number(req.body.rating) > 5 || Number(req.body.rating) < 0 || req.body.rating === undefined || !Number.isInteger(req.body.rating)) {
    return res.status(400).json();
  }

  findedProduct.rating = req.body.rating;

  return res.status(200).json(findedProduct);  
};

exports.favorite = (req, res) => {
  /*
    #swagger.tags = ['User endpoints']
    #swagger.description = 'Change product favorite state'
    #swagger.parameters['obj'] = {
      in: 'body',
      schema: {
          $favorite: true,
      }
    } 
  */
  const { id } = req.params;
  const findedProduct = products.find(product => product.id === id);

  if (!findedProduct) {
    return res.status(404).json();
  }

  if (typeof req.body.favorite !== 'boolean') {
    return res.status(400).json();
  }

  findedProduct.favorite = req.body.favorite;

  return res.status(200).json(findedProduct);  
};

// Admins

exports.availability = (req, res) => {
  /*
    #swagger.tags = ['Admin endpoints']
    #swagger.description = 'Change product availability'
    #swagger.parameters['obj'] = {
      in: 'body',
      schema: {
          $availability: true,
      }
    } 
  */
  const { id } = req.params;
  const findedProduct = products.find(product => product.id === id);

  if (!findedProduct) {
    return res.status(404).json();
  }

  if (typeof req.body.availability !== 'boolean') {
    return res.status(400).json();
  }

  findedProduct.availability = req.body.availability;

  return res.status(200).json(findedProduct);  
};
