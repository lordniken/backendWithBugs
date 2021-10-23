const swaggerAutogen = require('swagger-autogen')()
const swaggerJson = 'src/swagger.json'
const routes = ['src/routes.js']

const setup = {
  host: 'localhost:4000',
  schemes: ['http'],
};

swaggerAutogen(swaggerJson, routes, setup)