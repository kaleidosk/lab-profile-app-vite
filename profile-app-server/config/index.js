// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

// ℹ️ Needed to accept from requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request if from the same domain, by default express wont accept POST requests


const cors = require("cors");

// Define la URL del frontend
const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";

// Configuración de CORS
const corsOptions = {
  origin: FRONTEND_URL, // Permitir solicitudes solo desde esta URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Permitir los métodos HTTP especificados
  allowedHeaders: ["Content-Type", "Authorization"], // Permitir los encabezados especificados
};

// Middleware de CORS
module.exports = (app) => {
  // Because this is a server that will accept requests from outside and it will be hosted on a server with a `proxy`, express needs to know that it should trust that setting.
  // Services like heroku use something called a proxy and you need to add this to your server
  app.set("trust proxy", 1);

  // Configuración de CORS utilizando las opciones definidas
  app.use(cors(corsOptions));
};



  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

