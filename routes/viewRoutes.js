const express = require('express');
const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewController.getOverview);
router.get(
  '/tour/:slug',
  authController.isLoggedIn,
  authController.protect,
  viewController.getTour
);
router.get('/login', authController.isLoggedIn, viewController.login);
router.get('/me', authController.protect, viewController.getAccount);

router.post(
  '/submit-user-data',
  authController.protect,
  viewController.updateUserData
);

router.get('/my-tours', authController.protect, viewController.getMyTours);

module.exports = router;
