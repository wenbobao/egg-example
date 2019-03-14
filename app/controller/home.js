'use strict';

const Controller = require('../controller/base');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async test_json() {
    const { ctx } = this;
    const data = {
      list: [
        {id: 1, title: 'hello'},
        {id: 2, title: 'hello'},
      ]
    };
    this.success(data);
  }
  async test_db() {
    const { ctx } = this;
    const user = await ctx.model.User.findById(1);
    this.success(user)
  }
  async test_service() {
    const { ctx, service, logger } = this;
    // 获取参数
    const userId = ctx.params.id;
    // 打印log
    logger.info(userId);
    // 调用service
    const userInfo = await service.user.find(userId);
    // 返回数据
    this.success(userInfo);
  }
  async test_error() {
    const { ctx } = this;
    this.ajaxError();
    // this.ajaxError('sss', 301);
    // this.ajaxError('sss', 301, 'sss');
  }
  async test_query() {
    const { ctx, logger } = this;
    logger.info(ctx.query);
  }

  async test_expection() {
    const { ctx, service, logger } = this;
    try {
      // 调用service
      const data = await service.user.fetch();
      // 返回数据
      this.success(data);
    } catch (error) {
      logger.error(error);
      this.ajaxError('', 300, error.message);
    }
  }
}

module.exports = HomeController;
