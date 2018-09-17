const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminController');
const itemController = require('../controllers/itemController');
const { catchErrors } = require('../handlers/errorHandlers');

/* Login */
router.get('/login', adminController.loginForm);
router.post('/login', authController.login);

router.get('/logout', authController.logout);

/* ADMIN DASHBOARD */
/* Dash Home*/
router.get(
	'/admindash',
	authController.isLoggedIn,
	adminController.dashboard,
);
router.get(
	'/admindash/inventory',
	authController.isLoggedIn,
	catchErrors(itemController.getStore),
);

/* Edit Inventory*/
router.post(
	'/admindash/additem',
	authController.isLoggedIn,
	catchErrors(itemController.addItem),
);
router.post(
	'/admindash/additem/:id',
	authController.isLoggedIn,
	catchErrors(itemController.addItem),
);
router.get(
	'/admindash/:id/edit',
	authController.isLoggedIn,
	catchErrors(itemController.editItem),
);
router.get(
	'/admindash/:id/edit',
	authController.isLoggedIn,
	catchErrors(itemController.deleteItem),
);

/* Edit Admins */
router.post(
	'/admindash/addadmin',
	authController.isLoggedIn,
	catchErrors(adminController.addAdmin),
);
router.post(
	'/admindash/addadmin/:id',
	authController.isLoggedIn,
	catchErrors(adminController.addAdmin),
);
router.post(
	'/admindash/editadmin/:id',
	authController.isLoggedIn,
	catchErrors(adminController.editAdmin),
);
router.post(
	'/admindash/editadmin/:id',
	authController.isLoggedIn,
	catchErrors(adminController.deleteAdmin),
);
router.get(
	'/admindash/admins',
	authController.isLoggedIn,
	catchErrors(adminController.getAdmins)
);

module.exports = router;
