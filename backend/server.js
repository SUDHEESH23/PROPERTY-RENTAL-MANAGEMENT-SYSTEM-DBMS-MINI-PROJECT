const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const propertyRoutes = require('./routes/propertyRoutes');
const propertyownerRoutes = require('./routes/propertyownerRoutes');
const db = require('./database');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/properties', propertyRoutes);
app.use('/api/propertyowners', propertyownerRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
