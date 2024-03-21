const portloc = 1059

import http from "node:http";
import express from "express";
import cookieParser from "cookie-parser";
import path from "node:path";

const server = http.createServer();
const PORT = process.env.PORT || portloc;
const app = express(server);
const __dirname = process.cwd();

app.use(cookieParser());
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true
    })
);

app.use(express.static('src'))

function writepath(name) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", name));
});}

app.listen(portloc, () =>
  console.log('app running at port: ', portloc,
));

writepath('hub.html')
