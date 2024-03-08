// routes/propertyRoutes.js
const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyContoller');

router.get('/getproperties', propertyController.getProperties);
router.get('/getproperty/:id', propertyController.getPropertyById);
router.post('/createproperty', propertyController.createProperty);
router.put('/updateproperty/:id', propertyController.updateProperty);
router.delete('/deleteproperty/:id', propertyController.deleteProperty);

module.exports = router;
