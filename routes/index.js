const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminController');
const itemController = require('../controllers/itemController');
const { catchErrors } = require('../handlers/errorHandlers');

/* Administrator dashboard */
router.get('/login', adminController.loginForm);
router.post('/login', authController.login);

router.get('/logout', authController.logout);

router.get(
	'/admindash',
	authController.isLoggedIn,
	adminController.dashboard,
);
router.get(
	'/admindash/inventory',
	authController.isLoggedIn,
	catchErrors(adminController.getStore),
);
router.post(
	'/admindash/additem',
	authController.isLoggedIn,
	catchErrors(adminController.addItem),
);
router.get(
	'/admindash/edititem',
	authController.isLoggedIn,
	catchErrors(adminController.editItem),
);


module.exports = router;
