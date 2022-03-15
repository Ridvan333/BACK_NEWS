const { Router } = require('express');

const router = Router();

router.use('/categorys', require('./categorys.route'));
router.use('/comments', require('./comments.route'));
router.use('/news', require('./news.route'));
router.use('/users', require('./users.route'));

module.exports = router; 