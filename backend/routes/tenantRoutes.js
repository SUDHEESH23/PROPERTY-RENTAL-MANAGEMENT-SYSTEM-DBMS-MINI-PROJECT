const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/tenantController');

router.get('/gettenants', tenantController.getTenants);
router.post('/createtenant', tenantController.createTenant);
router.put('/updatetenant/:id', tenantController.updateTenant);
router.delete('/deletetenant/:id', tenantController.deleteTenant);

module.exports = router;
