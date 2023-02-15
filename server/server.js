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
import path from "path";
import template from "./../template";
import { MongoClient } from 'mongodb'


const app = express();  // I will use this app to build the rest of the Node server application.
devBundle.compile(app);  //This line is only meant for development mode. Comment out when building the application code for production.

const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist'))); 

app.get('/', (req, res) => {
    res.status(200).send(template()) // Render template.js in the browser on request
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info("server started on port %s. ", port)
});

const url = process.env.MONGDB_URI || 
    'mongodb://localhost:27017/mernSimpleSetup';
// MongoClient is the driver that connects to the running MongoDB instance using its URL. 
// It allows to implement the database-related code in the backend
MongoClient.connect(url, (err, db) => {
    console.log("connected successfully to mongodb server")
    db.close()
});