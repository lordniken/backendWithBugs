const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(cors());
app.use('/', require('./routes'));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(4000, () =>
  console.log('Server has benn started'),
);

