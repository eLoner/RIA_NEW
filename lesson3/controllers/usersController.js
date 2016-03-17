'use strict';

var users = require("../lib/users"),
    queryString = require("querystring"),
    url = require("url");

module.exports = {
    getUser: function (request, response, next) {

        setTimeout(function (next) {
            response.statusCode = 200;

            //response.setHeader('Content-Type', 'text/html; charset=utf-8');

            try {
                if (users.get().length) {
                    var responseText = JSON.stringify(users.get(), null, 2);
                } else {
                    var responseText = 'users not found';
                }
                response.write(responseText);
                next();
            } catch (a) {
                next(a);
            }
        }, 500, next)
    },
    postUser: function (request, response, next) {

        //response.setHeader('Content-Type', 'text/html; charset=utf-8');

        var body = '';

        request.on('data', function (data) {
            body += data;
        });

        request.on('end', function () {

            var post = queryString.parse(body);

            if (users.add(post)['edit']) {
                response.statusCode = 200;
                response.write('users data has been changed');
                next();
            }
            else if (users.add(post)['success']) {
                response.statusCode = 200;
                response.write('new user has been added');
                next();
            }
            else {
                response.statusCode = 400;
                response.write('Bad request');
                next();
            }
        });
    }
};