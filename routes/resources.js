"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then((results) => {  
        //res.json(results);
        res.render("index", {resources: results})
    });
  });

  router.get("/new", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then((results) => {  
        //res.json(results);
        res.render("index", {resources: results})
    });
  });

  return router;
}