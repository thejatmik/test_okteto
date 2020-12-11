/* eslint-disable-next-line new-cap */
const router = require('express').Router();
const UserController = require('../controllers/User.js');

/*
 * User Router
 * - Create user
 * - Get User Detail (future)
 *   - By ID
 *   - By Token
 * - Get User validation (true if token is valid)
 * - Edit User (future)
 * - Delete User
*/

// register and login user
router.post('/register', UserController.postRegister);
router.post('/login', UserController.postLogin);

// send token to query to check user payload
router.get('/', UserController.getTokenValidation);

// delete user
router.delete('/', UserController.deleteUser);

module.exports = router;
