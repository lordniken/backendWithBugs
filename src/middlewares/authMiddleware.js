module.exports = (req, res, next) => {
  /* 
    #swagger.security = [{
      "name": []
    }] 
  */
  if (!req.headers.auth) {
    return res.status(401).json();
  }
  
  return next();
};