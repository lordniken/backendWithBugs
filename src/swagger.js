const swaggerAutogen = require('swagger-autogen')();
const swaggerJson = 'src/swagger.json';
const routes = ['src/routes.js'];

const setup = {
  host: 'localhost:4000',
  schemes: ['http'],
  securityDefinitions: {
    name: {
      type: 'apiKey',
      in: 'header',
      name: 'Auth',
      description: '`For admin rights type admin`'
    },
  },
};

swaggerAutogen(swaggerJson, routes, setup);
