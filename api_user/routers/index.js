/* eslint-disable-next-line new-cap */
const router = require('express').Router();
const userRouter = require('./user.js');

router.use('/user', userRouter);

module.exports = router;
