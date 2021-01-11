// build your server here
const express = require("express");
const server = express();
const welcomeRouter = require("./welcome/welcome-router");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

server.use(express.json());
server.use(welcomeRouter);
 server.use(projectRouter);
 server.use(resourceRouter);
 server.use(taskRouter);

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})


module.exports = server;