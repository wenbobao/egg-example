'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  
  success(data, code = 200, msg = 'success') {
    this.ctx.body = {
      code: code,
      msg: msg,
      data: data
    }
  }

  ajaxError(data, code = 300, msg = 'error') {
    this.ctx.body = {
      code: code,
      msg: msg,
      data: data
    }
  }
}

module.exports = BaseController;
