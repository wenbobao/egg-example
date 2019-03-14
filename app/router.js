'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test_json', controller.home.test_json);
  router.get('/test_db', controller.home.test_db);
  router.get('/user/:id', controller.home.test_service);
  router.get('/error', controller.home.test_error);
  router.get('/test_query', controller.home.test_query);
  router.get('/test_expection', controller.home.test_expection);
  router.resources('users', '/users', controller.users);
};
