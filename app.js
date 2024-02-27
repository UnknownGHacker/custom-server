//import http from "node:http";
import * as http from "http";
import express from "express";
import cookieParser from "cookie-parser";
import path from "node:path";

const server = http.createServer();
const PORT = process.env.PORT || 1059;
const app = express(server);
const __dirname = process.cwd();

app.use(cookieParser());
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true
    })
  );

app.listen(1059, () =>
  console.log('app running at port 1059'),
);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
  });