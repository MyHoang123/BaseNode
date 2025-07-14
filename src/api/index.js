const express = require("express");

const UserController = require("../Controllers/UserController")

const NewsController = require("../Controllers/NewsController")

let router = express.Router();
router.get("/gethotnews", NewsController.getHotNews);
router.get("/refresh-token", UserController.RefeshToken);

const Route = (app) => {
  app.use(router);
};

module.exports = Route;
