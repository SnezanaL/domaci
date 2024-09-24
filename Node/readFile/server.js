//node server.js 'yourinput'
//grab the passed in value from process.argv.slice(2)[0]

//WRITE FILE
//fs.writeFile('name of file',value)
//.then ===> console.log a message or do somethin else if you wish
//.catch any errors

//READ FILE
//fs.readFile('name of file','utf-8')
//.then ===> console.log the content of the file
//.catch any errors

import express from "express";
import { promises as fs } from "fs";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const value = process.argv.slice(2)[0];
const fileName = "test.txt";

fs.writeFile(fileName, "Hello World")
  .then(() => console.log("file written"))
  .catch((err) => console.error(err));

//Read the content of the file

fs.readFile(fileName, "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
