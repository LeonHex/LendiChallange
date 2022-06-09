import express from "express";
import cors from "cors";

import router from "./routes";

const app = express();
const port = 8080;

app.use(cors());

app.use("/", router);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
