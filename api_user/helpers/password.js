/**
 * PASSWORD VALIDATOR HELPER
*/
class PasswordHelper {
  /**
   * @param {string} str : input string
   * @return {Boolean}
  */
  static minimumLength(str) {
    return true;
  }

  /**
   * @param {string} str : input string
   * @return {Boolean}
  */
  static checkCharacter(str) {
    return true;
  }

  /**
   * @param {string} str : input string
   * @return {Boolean}
  */
  static forbiddenCharacter(str) {
    return true;
  }
}

module.exports = PasswordHelper;
