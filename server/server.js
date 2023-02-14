// this file sets up the server

/* 
I will implement the Node-Express
app, which initiates client-side code bundling, starts the server, sets up the path to
serve static assets to the client, and renders the React view in a template when a
GET
request is made to the root route.
*/

import express from "express";
import devBundle from "./devBundle"; //This line is only meant for development mode. Comment out when building the application code for production.

const app = express();  // I will use this app to build the rest of the Node server application.
devBundle.compile(app);  //This line is only meant for development mode. Comment out when building the application code for production.