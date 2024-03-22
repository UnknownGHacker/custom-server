import http from "node:http";
import express from "express";
import cookieParser from "cookie-parser";
import path from "node:path";

const portloc = 8080;

const app = express();
const server = http.createServer(app);

const __dirname = process.cwd();

app.use(cookieParser());
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true
    })
);

app.use(express.static('src'));

function writepath(name) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", name));
  });
}

writepath('hub.html');

const PORT = process.env.PORT || portloc;
server.listen(PORT, () => {
  console.log('app running at port: ', PORT);
});