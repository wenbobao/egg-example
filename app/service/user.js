// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.ctx.app.mysql.query('select * from users where id = ?', uid)
    return user;
  }

  async fetch() {
    const result = await this.ctx.app.curl('https://registry.npm.taobao.org/egg/latest', {
      dataType: 'json',
    });
    // this.ctx.app.logger.info(result);
    if (result.data.name == 'eggx') {
      return result;
    }
    else {
      throw new Error('response name is not egg');
    }
  }
}

module.exports = UserService;