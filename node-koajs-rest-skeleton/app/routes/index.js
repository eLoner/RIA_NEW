module.exports = function routes(app) {
    "use strict";

    var Router = require('koa-router');
    var router = new Router();

    router
        .get('/users', require('../controllers/indexController').list)
        .get('/users/:id', require('../controllers/indexController').getId)
        .post('/users/', require('../controllers/indexController').createItem)
        .put('/users/:id', require('../controllers/indexController').updateItem)
        .delete('/users/:id', require('../controllers/indexController').removeItem)
        .post('/memcached', require('../controllers/memcachedController').postAction)
        .get('/memcached/:key', require('../controllers/memcachedController').getAction)
        .put ('/memcached', require('../controllers/memcachedController').putAction)
        .delete ('/memcached/:key', require('../controllers/memcachedController').deleteAction);

    app.use(router.middleware());
};