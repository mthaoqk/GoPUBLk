router.use('/', require('./users'));
router.use('/profiles', require('./profiles'));
router.use('/Projects', require('./Projects'));
var router = require('express').Router();
router.use('/tags', require('./tags'));
module.exports = router;
