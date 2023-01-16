const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.get('/overview', viewController.getOverview);
router.get('/tour', viewController.getTour);
router.get('/', (req, res) => {
  res.status(200).render('base', {
    tour: 'The Forest Hiker',
    user: 'Jonas',
  });
});

module.exports = router;