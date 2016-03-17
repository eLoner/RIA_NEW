'use strict';

module.exports = {
    "get": {
        "/users": require("./controllers/usersController").getUser
    },
    "post": {
        "/users": require("./controllers/usersController").postUser
    }
};
