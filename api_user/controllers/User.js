/**
 * USER CONTROLLER
*/
class UserController {
  /**
   * @param {*} req : http request
   * @param {*} res : http response
  */
  static postRegister(req, res) {
    let {
      username,
      password,
    } = req.body;
    // check username, error if exists
    // check password, error if validation return false
    res.status(200).json({
      method: 'postRegister',
      status: true,
    });
  }

  /**
   * @param {*} req : http request
   * @param {*} res : http response
  */
  static postLogin(req, res) {
    res.status(200).json({
      method: 'postLogin',
      status: true,
    });
  }

  /**
   * @param {*} req : http request
   * @param {*} res : http response
  */
  static getTokenValidation(req, res) {
    res.status(200).json({
      method: 'getTokenValidation',
      status: true,
    });
  }

  /**
   * @param {*} req : http request
   * @param {*} res : http response
  */
  static deleteUser(req, res) {
    res.status(200).json({
      method: 'deleteUser',
      status: true,
    });
  }
};

module.exports = UserController;
