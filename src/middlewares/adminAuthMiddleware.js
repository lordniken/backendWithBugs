module.exports = (req, res, next) => {
  /* 
    #swagger.security = [{
      "name": []
    }] 
  */
  if (!req.headers.auth || req.headers.auth !== 'admin') {
    return res.status(401).json({ error: 'Only admin can change this key'});
  }
  
  return next();
};
