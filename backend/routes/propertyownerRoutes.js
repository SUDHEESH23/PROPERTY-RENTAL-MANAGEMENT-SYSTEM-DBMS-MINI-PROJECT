// routes/propertyOwnerRoutes.js
const express = require('express');
const router = express.Router();
const propertyOwnerController = require('../controllers/propertyOwnerController');

router.get('/getowners', propertyOwnerController.getPropertyOwners);
router.get('/getowner/:id', propertyOwnerController.getPropertyOwnerById);
router.post('/createowner', propertyOwnerController.createPropertyOwner);
router.put('/updateowner/:id', propertyOwnerController.updatePropertyOwner);
router.delete('/deleteowner/:id', propertyOwnerController.deletePropertyOwner);

module.exports = router;
