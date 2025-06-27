import express, { Request, Response } from "express";
import db from "./database/database";
import routes from "./routes/route";
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Express is running in port: ${PORT}`);
});
