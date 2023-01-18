const express = require('express');
const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, authController.protect, viewController.getTour);
router.get('/login', authController.isLoggedIn, viewController.login);

module.exports = router;
