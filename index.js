// start your server here
const express = require("express");
const server = require("./api/server");

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
})